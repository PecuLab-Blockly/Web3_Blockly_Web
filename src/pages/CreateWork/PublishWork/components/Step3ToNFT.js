import React, { useRef, useState } from 'react'
import './StepsToNFT.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'

function Step3ToNFT({ setIsFinished }) {
  const NFTCode = 'asdfghjkl4567890'
  const NFTcodeRef = useRef(NFTCode)
  const [copied, setCopied] = useState(false)
  const [isConfirmed, setConfirmed] = useState(false)

  const confirmPublish = () => {
    setConfirmed(true)
    setIsFinished(true) // Set isFinished to true when publishing is confirmed
  }

  const handleCopyNFTCode = () => {
    navigator.clipboard
      .writeText(NFTcodeRef.current)
      .then(() => {
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 1500)
      })
      .catch((error) => {
        console.error('複製失敗:', error)
      })
  }

  return (
    <div className='data-container'>
      <div className='to-NFT-Title'>發行NFT</div>
      {!isConfirmed && (
        <div className='ready-to-NFT'>
          <h2>確認發行NFT？</h2>
          <button onClick={confirmPublish}>確認發行</button>
        </div>
      )}
      {isConfirmed && (
        <div className='sucess-to-NFT'>
          <h2 style={{ marginBottom: '3%' }}>發行完成！</h2>
          <div className='icon-inbox-success'>
            <img
              src='https://cdn.discordapp.com/attachments/743828889276776472/1113040907558723594/image.png'
              width={'80px'}
            />
          </div>

          <div className='NFT-code' onClick={handleCopyNFTCode}>
            <h5>作品的NFT編碼：</h5>
            <a>{NFTCode}</a>
            <button>
              <FontAwesomeIcon icon={faCopy} size='1x' />
            </button>
          </div>
          {copied && <div className='copy-message'>已複製！</div>}
        </div>
      )}
    </div>
  )
}

export default Step3ToNFT
