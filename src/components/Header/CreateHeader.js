import '../../default.scss'
import './Header.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWallet,
  faUser,
  faCog,
  faUndo,
  faRedo
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function CreateHeader(props) {
  const [showMemberMenu, setShowMemberMenu] = useState(false)
  const [workName, setWorkName] = useState('作品名稱') // 設定初始作品名稱為 "作品名稱"
  const [editing, setEditing] = useState(false) // 設定是否在編輯狀態
  const handleMemberMenuHover = () => {
    setShowMemberMenu(true)
  }

  const handleMemberMenuLeave = () => {
    setShowMemberMenu(false)
  }
  const handleWorkNameClick = () => {
    setEditing(true)
  }

  const handleWorkNameBlur = () => {
    setEditing(false)
  }

  const handleWorkNameChange = (event) => {
    setWorkName(event.target.value)
  }
  return (
    <div className='Header'>
      <header
        className='App-header'
        style={{
          background: 'linear-gradient(270deg, #FECD25 2.99%, #F86676 98.75%)'
        }}
      >
        <div style={{ marginRight: '0vw' }}>
          <h1>
            <Link
              style={{
                marginLeft: '25%',
                color: 'white',
                textDecoration: 'none'
              }}
              to='/'
            >
              WeBlockly
            </Link>
          </h1>
        </div>
        <div className='createHeader-container'>
          <div className='createHeader-left'>
            <button className='createHeader_button'>檔案</button>
            <div className='edit-button-group'>
              <button className='createHeader_button'>
                <FontAwesomeIcon icon={faUndo} size='1x' />
              </button>
              <button className='createHeader_button'>
                <FontAwesomeIcon icon={faRedo} size='1x' />
              </button>
            </div>
          </div>

          {/* 作品名稱 */}

          <div
            className='work-name-box'
            contentEditable={editing} // 根據編輯狀態設置 contentEditable 屬性
            suppressContentEditableWarning={true} // 移除 console 警告
            onClick={handleWorkNameClick}
            onBlur={handleWorkNameBlur}
            onChange={handleWorkNameChange}
          >
            {workName}
          </div>

          <div className='createHeader-right'>
            {/* 發行NFT按鈕 */}
            <button className='save-button'>暫存遊戲</button>
            <button className='NFT-button' onClick={props.onNFTButtonClick}>發行遊戲</button>
            <ul
              className='member-list'
              style={{
                width: '5vw',
                height: '4.5vh',
                marginTop: '0',
                marginBottom: '0'
              }}
              onMouseEnter={handleMemberMenuHover}
              onMouseLeave={handleMemberMenuLeave}
            >
              <div className='member-item'>
                <FontAwesomeIcon
                  icon={faWallet}
                  size='1x'
                  style={{
                    marginRight: '3px',
                    marginTop: '5px'
                  }}
                />
                <a href='#'></a>
                {showMemberMenu && (
                  <ul className='member-dropdown' style={{ width: '220%' }}>
                    <div>
                      <FontAwesomeIcon
                        icon={faUser}
                        size='1x'
                        style={{
                          marginRight: '1px',
                          marginTop: '3px',
                          marginLeft: '5%'
                        }}
                      />
                      <Link to='/profile'>會員profile</Link>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faCog}
                        size='1x'
                        style={{
                          marginRight: '1px',
                          marginTop: '3px',
                          marginLeft: '5%'
                        }}
                      />
                      <Link to='/setting'>設定</Link>
                    </div>
                  </ul>
                )}

                <div
                  style={{
                    color: 'white',
                    backgroundColor: '#322FCD',
                    width: '40vw',
                    height: '4vh',
                    borderRadius: '50%'
                  }}
                ></div>
              </div>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}

export default CreateHeader
