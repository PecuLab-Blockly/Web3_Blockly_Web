import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './UploadImage.scss'

const UploadImage = () => {
  const [selectedImages, setSelectedImages] = useState([])
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const fileInputRef = useRef(null)

  const handleImageUpload = (event) => {
    const files = event.target.files
    const updatedImages = [...selectedImages]

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const reader = new FileReader()

      reader.onload = () => {
        if (reader.readyState === 2) {
          updatedImages.push({
            file,
            name: file.name,
            url: reader.result
          })
          setSelectedImages(updatedImages)
        }
      }

      if (file) {
        reader.readAsDataURL(file)
      }
    }
  }

  const handleImageDelete = (index) => {
    const updatedImages = [...selectedImages]
    updatedImages.splice(index, 1)
    setSelectedImages(updatedImages)
  }

  const handleNameChange = (index, newName) => {
    const updatedImages = [...selectedImages]
    updatedImages[index].name = newName
    setSelectedImages(updatedImages)
  }

  const handleChooseFile = () => {
    fileInputRef.current.click()
  }

  return (
    <div style={{ marginLeft: '3%', marginTop: '1%' }}>
      {/* 選擇檔案 */}
      <input
        type='file'
        accept='image/*'
        multiple
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleImageUpload}
      />
      <button onClick={handleChooseFile} style={{ marginBottom: '3%' }}>
        選擇檔案
      </button>
      {/* 預覽照片 */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          maxHeight: '200px',
          maxWidth: '100%',
          overflowY: 'auto'
        }}
      >
        {selectedImages.map((image, index) => (
          <div
            key={index}
            style={{
              flexDirection: 'column',
              display: 'flex',
              position: 'relative',
              marginRight: '10px',
              marginBottom: '10px'
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={image.url}
              alt={`上傳的圖片 ${index + 1}`}
              style={{ width: '100px' }}
            />
            {hoveredIndex === index && (
              <div
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '40px',
                  cursor: 'pointer',
                  zIndex: 1
                }}
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => handleImageDelete(index)}
                  style={{ color: '#3199D2' }}
                />
              </div>
            )}
            <input
              className='image-name'
              type='text'
              value={image.name}
              onChange={(e) => handleNameChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UploadImage
