import React from 'react'
import './StepsToNFT.scss'

function Step1ToNFT() {
  return (
    <div className='data-container' style={{ overflow: 'auto' }}>
      <div className='to-NFT-Title'>填寫欄位</div>
      <div className='to-NFT-Subtitle'>作品名稱</div>
      <input className='input-box'></input>
      <div className='to-NFT-Subtitle'>屬性</div>
      <input className='input-box'></input>
      <div className='to-NFT-Subtitle'>作品介紹</div>
      <textarea className='input-box'></textarea>
    </div>
  )
}

export default Step1ToNFT
