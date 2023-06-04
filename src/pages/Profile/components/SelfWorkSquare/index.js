import React from 'react'

function SelfWorkSquare({ data }) {
  return (
    <div className='WorkSquare'>
      <div className='work_item'>
        <div className='work_image'>
          <img src={data.image} alt={data.name} />
        </div>
        <div className='work_content'>
          <h4>{data.name}</h4>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'space-around',
              marginBottom: '5%',
              fontSize: '10px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              觀看數<div>{data.view}</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              收藏數<div>{data.save}</div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              收益量<div>{data.earn}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelfWorkSquare
