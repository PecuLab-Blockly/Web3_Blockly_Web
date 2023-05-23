import { useState, useEffect, useCallback } from 'react'
import './DashBoard.scss'
import SelfIntro from './SelfIntro'
import React from 'react'

function DashBoard() {
  return (
    <div className='dashboard'>
      <div className='dashboard_top'>
        <div className='data'>
          <div style={{ fontSize: '32px' }}>10</div>
          <div>作品數</div>
        </div>
        <div className='data'>
          <div style={{ fontSize: '32px' }}>8</div>
          <div>發行數</div>
        </div>
        <div className='data'>
          <div style={{ fontSize: '32px' }}>100</div>
          <div>收益量</div>
        </div>
      </div>
      <div style={{ width: '90%', height: '100%' }}>
        <SelfIntro></SelfIntro>
      </div>
    </div>
  )
}

export default DashBoard
