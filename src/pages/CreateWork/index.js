import './CreateWork.scss'
import { useState, useEffect, useCallback } from 'react'
import CreateHeader from '../../components/Header/CreateHeader'
import WorkArea from './WorkArea'
import UploadImage from './UploadImage'
import React from 'react'

function CreateWork() {
  return (
    <div>
      <CreateHeader></CreateHeader>
      <div className='createWork_container'>
        {/* <WorkArea /> */}
        <div className='createWork_left'>
          <div className='createWork_show'></div>
          <div className='createWork_item'>
            <UploadImage />
          </div>
        </div>
        <div className='createWork_right'></div>
      </div>
    </div>
  )
}

export default CreateWork
