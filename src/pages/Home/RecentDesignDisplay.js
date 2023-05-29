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
          className='arrow_circle top'
          onClick={() => handleArrowClick('right')}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size='1x'
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
            size='1x'
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
