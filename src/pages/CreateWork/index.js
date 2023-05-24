import './CreateWork.scss'
import { useState, useEffect, useCallback } from 'react'
import CreateHeader from '../../components/Header/CreateHeader'
import WorkArea from './WorkArea'
import UploadImage from './UploadImage'
import React from 'react'
import InteractiveArea from './InteractiveArea'

function CreateWork() {
  const [codeResult, setCodeResult] = useState('')
  const [isWorkAreaRendered, setWorkAreaRendered] = useState(false)

  const handleCodeResult = (result) => {
    setCodeResult(result)
    console.log(result)
  }

  useEffect(() => {
    setWorkAreaRendered(true)
  }, [])

  return (
    <div>
      <CreateHeader />
      <div className='createWork_container'>
        <div className='createWork_left'>
          <div className='createWork_show'>
            <InteractiveArea codeResult={codeResult} />
          </div>
          <div className='createWork_item'>
            <UploadImage />
          </div>
        </div>
        <div className='createWork_right'>
          {isWorkAreaRendered && <WorkArea onValueChange={handleCodeResult} />}
        </div>
      </div>
    </div>
  )
}

export default CreateWork
