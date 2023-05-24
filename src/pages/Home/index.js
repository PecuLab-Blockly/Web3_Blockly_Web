import './Home.scss'
import { useState, useEffect, useCallback } from 'react'
import Header from '../../components/Header/HomeHeader'
import { faPencilAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import RecentDesignDisplay from './RecentDesignDisplay'
import PopularDesignDisplay from './PopularDesignDisplay'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div>
      <Header />
      <div className='home_container'>
        <div className='home_column one'>
          {/* 最近的設計 */}
          <div className='home_column_one_left'>
            <div className='title'>
              <div className='title_square_one'>
                <div style={{ marginLeft: '6%', width: '18%' }} className='h2'>
                  最近的設計
                </div>
              </div>
            </div>
            {/* 最近設計-作品區域 */}
            <RecentDesignDisplay />
          </div>
          {/* 右上方的兩個按鈕 */}
          <div className='home_column_one_right'>
            <button className='button red'>
              <FontAwesomeIcon
                icon={faPencilAlt}
                size='1x'
                style={{ marginRight: '8px' }}
              />
              <Link to='/createWork'>快速建立blockly</Link>
            </button>

            <button className='button yellow'>
              <FontAwesomeIcon
                icon={faPaperPlane}
                size='1x'
                style={{ marginRight: '8px' }}
              />
              快速發行NFT
            </button>
          </div>
        </div>

        {/* 熱門項目 */}
        <div className='home_column two'>
          <div className='title'>
            <div className='title_square'>
              <div style={{ marginLeft: '4%', width: '10%' }} className='h2'>
                熱門項目
              </div>
            </div>
          </div>
          <PopularDesignDisplay />
        </div>
      </div>
    </div>
  )
}

export default Home
