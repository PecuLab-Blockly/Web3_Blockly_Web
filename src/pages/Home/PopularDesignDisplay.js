import './Home.scss'
import { useState, useEffect, useCallback } from 'react'
import WorkSquare from '../../components/WorkSquare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function PopularDesignDisplay() {
  const [popularFakeData, setPopularFakeData] = useState([
    {
      id: 1,
      image:
        'https://cdn0.techbang.com/system/excerpt_images/47394/original/412dd61b293f336a0b0c95572e21078b.png?1478707071',
      name: '神奇島'
    },
    {
      id: 2,
      image:
        'https://celcliptipsprod.s3-ap-northeast-1.amazonaws.com/tips_article_body/ea57/472252/7f2df69be9b1003ef3550b8f82c87d20',
      name: '叢林探險'
    },
    {
      id: 3,
      image:
        'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg',
      name: '我家愛淋雨的狗勾'
    },
    {
      id: 4,
      image:
        'https://blog.tibame.com/wp-content/uploads/2018/04/4bcfbf66-0b3e-4ba0-85ab-aa966b42e5d1_1518426080983-2_cr.jpg',
      name: '森林冒險'
    },
    {
      id: 5,
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
      name: '狗狗奇遇記'
    },
    {
      id: 6,
      image:
        'https://unity.com/sites/default/files/styles/16_9_s_scale_width/public/2019-11/night-in-the-woods.jpg?itok=ogFXXtU7',
      name: 'Night'
    },
    {
      id: 7,
      image:
        'https://unity.com/sites/default/files/styles/16_9_s_scale_width/public/2019-11/platformer.jpg?itok=Wl_PEpQ-',
      name: '跑酷'
    }
  ])

  const [popularShowArrow, setPopularShowArrow] = useState(false)
  const visibleWorks = 6
  const [popularStartIndex, setPopularStartIndex] = useState(0)
  const [iconSize, setIconSize] = useState(16) // 預設圖示大小，以 x 為單位

  useEffect(() => {
    const handleResize = () => {
      // 根據螢幕寬度或其他相關因素計算圖示大小
      const screenWidth = window.innerWidth
      // 計算新的圖示大小，可以根據需求進行調整
      const newSize = Math.floor(screenWidth / 15000) // 例如將圖示大小設定為螢幕寬度的百分之一
      setIconSize(newSize)
    }
    // 監聽視窗大小變化
    window.addEventListener('resize', handleResize)
    // 初始化時觸發一次計算
    handleResize()
    // 組件卸載時移除事件監聽
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const popularHandleMouseEnter = useCallback(() => {
    setPopularShowArrow(true)
  }, [])

  const popularHandleLeave = useCallback(() => {
    setPopularShowArrow(false)
  }, [])

  const popularHandleArrowClick = useCallback(
    (direction) => {
      if (
        direction === 'right' &&
        popularStartIndex + visibleWorks < popularFakeData.length
      ) {
        setPopularStartIndex(popularStartIndex + 1)
      } else if (direction === 'left' && popularStartIndex > 0) {
        setPopularStartIndex(popularStartIndex - 1)
      }
    },
    [popularStartIndex, visibleWorks, popularFakeData.length]
  )

  const visibleData = popularFakeData.slice(
    popularStartIndex,
    popularStartIndex + visibleWorks
  )

  return (
    <div
      className='work_display'
      id='NextButton'
      onMouseEnter={popularHandleMouseEnter}
      onMouseLeave={popularHandleLeave}
    >
      {popularShowArrow &&
        popularStartIndex + visibleWorks < popularFakeData.length && (
        <div
          className='popular_arrow_circle right'
          onClick={() => popularHandleArrowClick('right')}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size={`${iconSize}x`} // 使用動態計算的圖示大小
            style={{ marginRight: '2px', color: 'white' }}
          />
        </div>
      )}

      {popularShowArrow && popularStartIndex > 0 && (
        <div
          className='popular_arrow_circle left'
          onClick={() => popularHandleArrowClick('left')}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={`${iconSize}x`}
            style={{ marginRight: '2px', color: 'white' }}
          />
        </div>
      )}

      {visibleData.map((data) => (
        <WorkSquare key={data.id} data={data} />
      ))}
    </div>
  )
}

export default PopularDesignDisplay