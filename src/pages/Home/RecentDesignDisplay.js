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
        'https://unity.com/sites/default/files/styles/16_9_s_scale_width/public/2019-11/Rubys-adventure-2D-tutorial-Unity.jpg?itok=fQDz_fdF',
      name: '走路的鱷魚'
    },
    {
      id: 2,
      image:
        'https://unity.com/sites/default/files/styles/810_scale_width/public/2021-11/children-of-morta-810x455%401x.jpg?itok=5MZ-4uD8',
      name: '奇幻森林'
    },
    {
      id: 3,
      image:
        'https://unity.com/sites/default/files/styles/810_scale_width/public/2021-11/hearthstone-810x455%401x.jpg?itok=Z8nH7591',
      name: '恐怖的老鼠'
    },
    {
      id: 4,
      image:
        'https://play-lh.googleusercontent.com/KKvwIEz5CE-k67sdDCJ4ipAZ0pAwXPgeSAA5zTgJTacuUckq__eCUeiD4zU5yX4FlA=w1052-h592-rw',
      name: '划船'
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
