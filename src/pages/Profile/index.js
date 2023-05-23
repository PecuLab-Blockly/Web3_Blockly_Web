import { useState } from 'react'
import './Profile.scss'
import Header from '../../components/Header/HomeHeader'
import DashBoard from './components/DashBoard'
import WorkSquare from '../../components/WorkSquare'
import DisplayWorks from './components/DisplayWorks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faEdit } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
function Profile() {
  const [profilePic, setProfilePic] = useState(null)
  const [editingName, setEditingName] = useState(false)
  const [name, setName] = useState('My Name')

  const handlePicUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfilePic(e.target.result)
        // 將背景顏色設為透明
        document.querySelector('.profile-pic').style.backgroundColor =
          'transparent'
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  return (
    <div>
      <Header></Header>
      <div className='container'>
        <div className='column one'>
          {/* 照片 */}
          <div className='column_one_left'>
            <div
              className='profile-pic'
              style={{
                backgroundImage: profilePic ? `url(${profilePic})` : '',
                backgroundColor: profilePic ? 'transparent' : '#ccc'
              }}
            >
              {!profilePic && (
                <>
                  <label className='upload-btn' htmlFor='pic-upload'>
                    <FontAwesomeIcon icon={faCamera} size='2x' />
                  </label>
                  <input
                    id='pic-upload'
                    type='file'
                    onChange={handlePicUpload}
                    accept='image/*'
                    style={{ display: 'none' }}
                  />
                </>
              )}
            </div>

            {/* 編輯名字 */}
            {!editingName && (
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <span className='h2'>{name}</span>
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => setEditingName(true)}
                />
              </div>
            )}
            {editingName && (
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  style={{ height: '60%' }}
                  onClick={() => setEditingName(false)}
                >
                  儲存
                </button>
              </div>
            )}
          </div>

          {/* DashBoard */}
          <div className='column_one_right'>
            <DashBoard></DashBoard>
          </div>
        </div>

        {/* 下方作品們 */}
        <div className='column two'>
          <DisplayWorks></DisplayWorks>
        </div>
      </div>
    </div>
  )
}

export default Profile
