import React, { useState } from 'react'
import './DisplayWorks.scss'
import WorkSquare from '../../../components/WorkSquare'
import SelfWorkSquare from '../components/SelfWorkSquare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

function SaveDisplayWorks() {
  const [type, setType] = useState('A')
  const [draftIndex, setDraftIndex] = useState(0)
  const [publishedIndex, setPublishedIndex] = useState(0)
  const [draftHoveredIndex, setDraftHoveredIndex] = useState(null)
  const [publishedHoveredIndex, setPublishedHoveredIndex] = useState(null)

  const handleTypeChange = (newType) => {
    setType(newType)
  }

  const handleDraftPrev = () => {
    if (draftIndex > 0) {
      setDraftIndex(draftIndex - 1)
    }
  }

  const handleDraftNext = () => {
    const maxIndex = draftItems.length - 4
    if (draftIndex < maxIndex) {
      setDraftIndex(draftIndex + 1)
    }
  }

  const handlePublishedPrev = () => {
    if (publishedIndex > 0) {
      setPublishedIndex(publishedIndex - 1)
    }
  }

  const handlePublishedNext = () => {
    const maxIndex = publishedItems.length - 4
    if (publishedIndex < maxIndex) {
      setPublishedIndex(publishedIndex + 1)
    }
  }

  const handleDraftHover = (index) => {
    setDraftHoveredIndex(index)
  }

  const handlePublishedHover = (index) => {
    setPublishedHoveredIndex(index)
  }

  const fakeData = [
    {
      type: 'A',
      status: 'draft',
      name: '未發行作品1',
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
    },
    {
      type: 'A',
      status: 'draft',
      name: '未發行作品2',
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
    },
    {
      type: 'A',
      status: 'draft',
      name: '未發行作品3',
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
    },
    {
      type: 'A',
      status: 'draft',
      name: '未發行作品4',
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
    },
    {
      type: 'A',
      status: 'draft',
      name: '未發行作品5',
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg'
    },
    {
      type: 'A',
      status: 'published',
      name: '已發行作品1',
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
      view: 10,
      save: 5,
      earn: 100
    },
    {
      type: 'A',
      status: 'published',
      name: '已發行作品2',
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
      view: 20,
      save: 8,
      earn: 200
    },
    {
      type: 'A',
      status: 'published',
      name: '已發行作品3',
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
      view: 15,
      save: 3,
      earn: 150
    },
    {
      type: 'A',
      status: 'published',
      name: '已發行作品4',
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
      view: 15,
      save: 3,
      earn: 150
    },
    {
      type: 'A',
      status: 'published',
      name: '已發行作品5',
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
      view: 15,
      save: 3,
      earn: 150
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

  const draftItems = fakeData.filter((item) => item.status === 'draft')
  const publishedItems = fakeData.filter((item) => item.status === 'published')
  const ownedItems = fakeData.filter((item) => item.type === 'B')

  const visibleDraftItems = draftItems.slice(draftIndex, draftIndex + 4)
  const visiblePublishedItems = publishedItems.slice(
    publishedIndex,
    publishedIndex + 4
  )

  const isDraftNextButtonVisible = draftIndex < draftItems.length - 4
  const isDraftPrevButtonVisible = draftIndex > 0
  const isPublishedNextButtonVisible =
    publishedIndex < publishedItems.length - 4
  const isPublishedPrevButtonVisible = publishedIndex > 0

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

      <div className={`portfolio ${type === 'A' ? 'bg-a' : 'bg-b'}`}>
        {type === 'A' && (
          <div className='work-section'>
            <h2>未發行</h2>
            <div className='work-display'>
              {visibleDraftItems.map((item, index) => (
                <div
                  key={index}
                  className='work-square-container'
                  onMouseEnter={() => handleDraftHover(index)}
                  onMouseLeave={() => handleDraftHover(null)}
                >
                  <WorkSquare data={item} />
                  {draftHoveredIndex === index && (
                    <div className='work-square-buttons'>
                      {isDraftPrevButtonVisible && (
                        <button
                          className='prev-button'
                          onClick={handleDraftPrev}
                        >
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                      )}
                      {isDraftNextButtonVisible && (
                        <button
                          className='next-button'
                          onClick={handleDraftNext}
                        >
                          <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {type === 'A' && (
          <div className='work-section'>
            <h2>已發行</h2>
            <div className='work-display'>
              {visiblePublishedItems.map((item, index) => (
                <div
                  key={index}
                  className='work-square-container'
                  onMouseEnter={() => handlePublishedHover(index)}
                  onMouseLeave={() => handlePublishedHover(null)}
                >
                  <SelfWorkSquare data={item} />
                  {publishedHoveredIndex === index && (
                    <div className='work-square-buttons'>
                      {isPublishedPrevButtonVisible && (
                        <button
                          className='prev-button'
                          onClick={handlePublishedPrev}
                        >
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                      )}
                      {isPublishedNextButtonVisible && (
                        <button
                          className='next-button'
                          onClick={handlePublishedNext}
                        >
                          <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {type === 'B' && (
          <div className='work-section'>
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

export default SaveDisplayWorks
