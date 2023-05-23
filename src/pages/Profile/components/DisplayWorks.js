import React, { useState } from 'react'
import './DisplayWorks.scss'

function DisplayWorks() {
  const [type, setType] = useState('A')
  const [showStatus, setShowStatus] = useState('all')

  const handleTypeChange = (newType) => {
    setType(newType)
    setShowStatus('all')
  }

  const items = [
    { type: 'A', status: 'draft', title: 'Item A1' },
    {
      type: 'A',
      status: 'published',
      title: 'Item A2',
      view: '1',
      save: '2',
      earn: '3'
    },
    { type: 'A', status: 'draft', title: 'Item A3' },
    {
      type: 'A',
      status: 'published',
      title: 'Item A4',
      view: '1',
      save: '2',
      earn: '3'
    },
    {
      type: 'A',
      status: 'published',
      title: 'Item A5',
      view: '1',
      save: '2',
      earn: '3'
    },
    { type: 'A', status: 'draft', title: 'Item A6' },
    { type: 'B', title: 'Item B1', description: 'Description for item B1' },
    { type: 'B', title: 'Item B2', description: 'Description for item B2' }
  ]

  const filteredItems = items.filter(
    (item) =>
      item.type === type && (showStatus === 'all' || item.status === showStatus)
  )
  const draftItems = filteredItems.filter((item) => item.status === 'draft')
  const publishedItems = filteredItems.filter(
    (item) => item.status === 'published'
  )
  return (
    <div className='display'>
      <div className='display_chang_button'>
        <button
          className='display_chang red'
          style={{ backgroundColor: type === 'A' ? '#F86676' : '#FFD3D8' }}
          onClick={() => handleTypeChange('A')}
        >
          我的作品
        </button>
        <button
          className='display_chang yellow'
          style={{ backgroundColor: type === 'B' ? '#FECD25' : '#FFEEB4' }}
          onClick={() => handleTypeChange('B')}
        >
          我擁有的
        </button>
      </div>
      <div
        className={`portfolio ${type === 'A' ? 'line-a' : 'line-b'}`}
        style={{ width: '100%', height: '5px' }}
      ></div>

      <div
        className={`portfolio ${type === 'A' ? 'bg-a' : 'bg-b'}`}
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {type === 'A' && (
          <div style={{ marginLeft: '5%' }}>
            <h2>未發行</h2>
            <div className='work_grid'>
              {draftItems.map((item, index) => (
                <div className='work_square' key={index}>
                  <div className='work_image'></div>
                  <div className='work_content'>
                    <div className={`item item-${item.type}`}>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h2>已發行</h2>
            <div className='work_grid'>
              {publishedItems.map((item, index) => (
                <div className='work_square' key={index}>
                  <div className='work_image'></div>
                  <div className='work_content'>
                    <div className={`item item-${item.type}}`}>
                      <h3>{item.title}</h3>
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
                          觀看數<div>{item.view}</div>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexDirection: 'column',
                            alignItems: 'center'
                          }}
                        >
                          收藏數<div>{item.save}</div>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexDirection: 'column',
                            alignItems: 'center'
                          }}
                        >
                          收益量<div>{item.earn}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {type === 'B' && (
          <div className='work_grid' style={{ marginLeft: '5%' }}>
            {filteredItems.map((item, index) => (
              <div className='work_square' key={index}>
                <div className='work_image'></div>
                <div className='work_content'>
                  <div className={`{item item-${item.type}}`}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DisplayWorks
