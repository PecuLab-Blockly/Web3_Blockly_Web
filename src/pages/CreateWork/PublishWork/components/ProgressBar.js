import React from 'react'
import './ProgressBar.scss'

const ProgressBar = ({ currentStep }) => {
  const getConnectorColor = (step) => {
    if (currentStep >= step) {
      return '#F86676'
    }
    return '#d9d9d9'
  }

  return (
    <div className='progress-bar'>
      <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
        <div className='label'>填寫欄位</div>
        <div className={`circle ${currentStep === 1 ? 'active' : ''}`}>1</div>
      </div>

      <div className='connector'>
        <div
          className='connector-line'
          style={{ backgroundColor: getConnectorColor(2) }}
        ></div>
      </div>

      <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
        <div className='label'>上傳圖片</div>
        <div className={`circle ${currentStep === 2 ? 'active' : ''}`}>2</div>
      </div>

      <div className='connector'>
        <div
          className='connector-line'
          style={{ backgroundColor: getConnectorColor(3) }}
        ></div>
      </div>

      <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
        <div className='label'>發行NFT</div>
        <div className={`circle ${currentStep === 3 ? 'active' : ''}`}>3</div>
      </div>
    </div>
  )
}

export default ProgressBar
