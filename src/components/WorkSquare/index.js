import React from 'react'
import './WorkSquare.scss'

function WorkSquare({ data }) {
  return (
    <div className='WorkSquare'>
      <div className='work_item'>
        <div className='work_image'>
          <img src={data.image} alt={data.name} />
        </div>
        <div className='work_content'>
          <h4>{data.name}</h4>
        </div>
      </div>
    </div>
  )
}

export default WorkSquare
