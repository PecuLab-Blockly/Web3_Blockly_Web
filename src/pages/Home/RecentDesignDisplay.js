import './Home.scss'
import { useState, useEffect, useCallback } from 'react'
import WorkSquare from '../../components/WorkSquare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function RecentDesignDisplay() {
  const [fakeData, setFakeData] = useState([
    {
      id: 1,
      image:
        'https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg',
      name: '作品名稱1'
    },
    {
      id: 2,
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
      name: '作品名稱2'
    },
    {
      id: 3,
      image:
        'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg',
      name: '作品名稱3'
    },
    {
      id: 4,
      image:
        'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg',
      name: '作品名稱4'
    },
    {
      id: 5,
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
      name: '作品名稱5'
    },
    {
      id: 6,
      image:
        'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
      name: '作品名稱6'
    }
  ])
  const [showArrow, setShowArrow] = useState(false)
  const visibleWorks = 3
  const [startIndex, setStartIndex] = useState(0)
  const visibleData = fakeData.slice(startIndex, startIndex + visibleWorks)
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

  const handleMouseEnter = useCallback(() => {
    setShowArrow(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setShowArrow(false)
  }, [])

  const handleArrowClick = useCallback(
    (direction) => {
      if (
        direction === 'right' &&
        startIndex + visibleWorks < fakeData.length
      ) {
        setStartIndex(startIndex + 1)
      } else if (direction === 'left' && startIndex > 0) {
        setStartIndex(startIndex - 1)
      }
    },
    [startIndex, visibleWorks, fakeData.length]
  )

  return (
    <div
      className='work_display'
      id='NextButton'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showArrow && startIndex + visibleWorks < fakeData.length && (
        <div
          className='arrow_circle right'
          onClick={() => handleArrowClick('right')}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size={`${iconSize}x`} // 使用動態計算的圖示大小
            style={{ marginRight: '2px', color: 'white' }}
          />
        </div>
      )}

      {showArrow && startIndex > 0 && (
        <div
          className='arrow_circle left'
          onClick={() => handleArrowClick('left')}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size={`${iconSize}x`} // 使用動態計算的圖示大小
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

export default RecentDesignDisplay
