import React, { useState, useCallback } from 'react'
import './DisplayWorks.scss'
import WorkSquare from '../../../components/WorkSquare'
import SelfWorkSquare from '../components/SelfWorkSquare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

function DisplayWorks() {
  const [draftShowArrow, setDraftShowArrow] = useState(false)
  const [publishedShowArrow, setPublishedShowArrow] = useState(false)
  const visibleWorks = 4
  const [draftStartIndex, setDraftStartIndex] = useState(0)
  const [publishedStartIndex, setPublishedStartIndex] = useState(0)
  const [iconSize, setIconSize] = useState(16) // 預設圖示大小，以 x 為單位
  const [type, setType] = useState('A')

  const fakeData = [
    {
      type: 'A',
      status: 'draft',
      image:
        'https://unity.com/sites/default/files/styles/16_9_s_scale_width/public/2019-11/Rubys-adventure-2D-tutorial-Unity.jpg?itok=fQDz_fdF',
      name: '走路的鱷魚'
    },
    {
      type: 'A',
      status: 'draft',
      image:
        'https://unity.com/sites/default/files/styles/810_scale_width/public/2021-11/children-of-morta-810x455%401x.jpg?itok=5MZ-4uD8',
      name: '奇幻森林'
    },
    {
      type: 'A',
      status: 'draft',
      image:
        'https://unity.com/sites/default/files/styles/810_scale_width/public/2021-11/hearthstone-810x455%401x.jpg?itok=Z8nH7591',
      name: '恐怖的老鼠'
    },
    {
      type: 'A',
      status: 'draft',
      image:
        'https://play-lh.googleusercontent.com/KKvwIEz5CE-k67sdDCJ4ipAZ0pAwXPgeSAA5zTgJTacuUckq__eCUeiD4zU5yX4FlA=w1052-h592-rw',
      name: '划船'
    },

    {
      type: 'A',
      status: 'draft',
      name: '還沒想好名字',
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
    },
    {
      type: 'A',
      status: 'published',
      image:
        'https://cdn0.techbang.com/system/excerpt_images/47394/original/412dd61b293f336a0b0c95572e21078b.png?1478707071',
      name: '神奇島',
      view: 10,
      save: 5,
      earn: 100
    },
    {
      type: 'A',
      status: 'published',
      image:
        'https://celcliptipsprod.s3-ap-northeast-1.amazonaws.com/tips_article_body/ea57/472252/7f2df69be9b1003ef3550b8f82c87d20',
      name: '叢林探險',
      view: 15,
      save: 3,
      earn: 150
    },
    {
      type: 'A',
      status: 'published',
      image:
        'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg',
      name: '我家愛淋雨的狗勾',
      view: 20,
      save: 8,
      earn: 200
    },
    {
      type: 'A',
      status: 'published',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Secretmaryochronicles.png/330px-Secretmaryochronicles.png',
      name: '水管工的冒險',
      view: 20,
      save: 8,
      earn: 200
    },

    {
      type: 'B',
      name: '擁有1',
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
    },
    {
      type: 'B',
      name: '擁有2',
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
    }
  ]
  const handleTypeChange = (newType) => {
    setType(newType)
  }

  const draftHandleMouseEnter = useCallback(() => {
    setDraftShowArrow(true)
  }, [])

  const draftHandleLeave = useCallback(() => {
    setDraftShowArrow(false)
  }, [])
  const publishedHandleMouseEnter = useCallback(() => {
    setPublishedShowArrow(true)
  }, [])

  const publishedHandleLeave = useCallback(() => {
    setPublishedShowArrow(false)
  }, [])

  const draftHandleArrowClick = useCallback(
    (direction) => {
      if (
        direction === 'right' &&
        draftStartIndex + visibleWorks < fakeData.length
      ) {
        setDraftStartIndex(draftStartIndex + 1)
      } else if (direction === 'left' && draftStartIndex > 0) {
        setDraftStartIndex(draftStartIndex - 1)
      }
    },
    [draftStartIndex, visibleWorks, fakeData.length]
  )
  const publishedHandleArrowClick = useCallback(
    (direction) => {
      if (
        direction === 'right' &&
        publishedStartIndex + visibleWorks < fakeData.length
      ) {
        setPublishedStartIndex(publishedStartIndex + 1)
      } else if (direction === 'left' && publishedStartIndex > 0) {
        setPublishedStartIndex(publishedStartIndex - 1)
      }
    },
    [draftStartIndex, visibleWorks, fakeData.length]
  )
  const draftItems = fakeData.filter((item) => item.status === 'draft')
  const publishedItems = fakeData.filter((item) => item.status === 'published')
  const ownedItems = fakeData.filter((item) => item.type === 'B')
  const visibleDraftItems = draftItems.slice(
    draftStartIndex,
    draftStartIndex + visibleWorks
  )
  const visiblePublishedItems = publishedItems.slice(
    publishedStartIndex,
    publishedStartIndex + visibleWorks
  )
  return (
    <div className='display'>
      <div className='display_change_button'>
        <button
          className='display_change red'
          style={{ backgroundColor: type === 'A' ? '#F86676' : '#FFD3D8' }}
          onClick={() => handleTypeChange('A')}
        >
          我的作品
        </button>
        <button
          className='display_change yellow'
          style={{ backgroundColor: type === 'B' ? '#FECD25' : '#FFEEB4' }}
          onClick={() => handleTypeChange('B')}
        >
          我擁有的
        </button>
      </div>
      <div
        className={`portfolio ${type === 'A' ? 'line-a' : 'line-b'}`}
        style={{ width: '100%', height: '5px' }}
      ></div>

      <div
        className={`portfolio ${type === 'A' ? 'bg-a' : 'bg-b'}`}
        style={{ paddingBottom: '5%', paddingTop: '2%' }}
      >
        {type === 'A' && (
          <div className='work-section' style={{ marginLeft: '3%' }}>
            <h2 style={{ marginBottom: '1.5%' }}>未發行</h2>
            <div
              className='work-display'
              onMouseEnter={draftHandleMouseEnter}
              onMouseLeave={draftHandleLeave}
            >
              {draftShowArrow &&
                draftStartIndex + visibleWorks < draftItems.length && (
                <div
                  className='arrow_circle draft_arrow_circle right'
                  onClick={() => draftHandleArrowClick('right')}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size={`${iconSize}x`} // 使用動態計算的圖示大小
                    style={{ marginRight: '2px', color: 'white' }}
                  />
                </div>
              )}

              {draftShowArrow && draftStartIndex > 0 && (
                <div
                  className='arrow_circle draft_arrow_circle left'
                  onClick={() => draftHandleArrowClick('left')}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    size={`${iconSize}x`}
                    style={{ marginRight: '2px', color: 'white' }}
                  />
                </div>
              )}

              {visibleDraftItems.map((item, index) => (
                <WorkSquare data={item} key={index} />
              ))}
            </div>
          </div>
        )}
        {type === 'A' && (
          <div
            className='work-section'
            style={{ marginLeft: '3%', marginTop: '3%' }}
          >
            <h2 style={{ marginBottom: '1.5%' }}>已發行</h2>
            <div
              className='work-display'
              onMouseEnter={publishedHandleMouseEnter}
              onMouseLeave={publishedHandleLeave}
            >
              {publishedShowArrow &&
                publishedStartIndex + visibleWorks < publishedItems.length && (
                <div
                  className='arrow_circle published_arrow_circle right'
                  onClick={() => publishedHandleArrowClick('right')}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size={`${iconSize}x`} // 使用動態計算的圖示大小
                    style={{ marginRight: '2px', color: 'white' }}
                  />
                </div>
              )}

              {publishedShowArrow && publishedStartIndex > 0 && (
                <div
                  className='arrow_circle published_arrow_circle left'
                  onClick={() => publishedHandleArrowClick('left')}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    size={`${iconSize}x`}
                    style={{ marginRight: '2px', color: 'white' }}
                  />
                </div>
              )}

              {visiblePublishedItems.map((item, index) => (
                <SelfWorkSquare data={item} key={index} />
              ))}
            </div>
          </div>
        )}

        {type === 'B' && (
          <div
            className='work-section'
            style={{ marginLeft: '3%', marginTop: '3%' }}
          >
            <div className='work-display'>
              {ownedItems.map((item, index) => (
                <WorkSquare key={index} data={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DisplayWorks
