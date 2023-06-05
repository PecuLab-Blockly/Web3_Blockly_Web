import './Header.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faWallet,
  faUser,
  faCog
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { editableInputTypes } from '@testing-library/user-event/dist/utils'




function Header() {
  const [address, setAddress] = useState(undefined)

  async function connectWallet() {
  
    if (typeof window.ethereum !== 'undefined') {
      try {
        const addressArray = await window.ethereum.request({method: 'eth_requestAccounts'})
        console.log(addressArray)
        setAddress(addressArray[0])
        return {
          status: 'Connected',
          address: addressArray[0]
        }
      } catch (err) {
        return {
          address: '',
          status: 'Error'
        }
      }
    } 
  }
  const [showMemberMenu, setShowMemberMenu] = useState(false)

  const handleMemberMenuHover = () => {
    setShowMemberMenu(true)
  }

  const handleMemberMenuLeave = () => {
    setShowMemberMenu(false)
  }
  return (
    <div className='Header'>
      <header className='App-header'>
        <div style={{ marginRight: '20vw' }}>
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

        <div className='search-box'>
          <FontAwesomeIcon
            icon={faSearch}
            size='1x'
            style={{ color: 'white' }}
          />
          <input type='text' placeholder='Search...' />
        </div>

        <ul
          className='member-list'
          onMouseEnter={handleMemberMenuHover}
          onMouseLeave={handleMemberMenuLeave}
        >
          <div className='member-item'>
            <FontAwesomeIcon
              icon={faWallet}
              size='1x'
              // style={{ marginRight: '3px', marginTop: '8px' }}
            />
            <a id='wallet-btn' onClick={connectWallet}>{address ? address : 'Connect Wallet'}</a>
            {showMemberMenu && (
              <ul className='member-dropdown'>
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
                width: '2.8vw',
                height: '2vw',
                borderRadius: '50%'
              }}
            ></div>
          </div>
        </ul>
      </header>
    </div>
  )
}

export default Header
