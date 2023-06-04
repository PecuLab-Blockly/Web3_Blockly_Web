import React from 'react'
import { useRef, useState } from 'react'
import './StepsToNFT.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport } from '@fortawesome/free-solid-svg-icons'

function Step2ToNFT() {

    const [selectedImage, setSelectedImage] = useState(null);

    const fileInputRef = useRef(null)

    const handleChooseFile = () => {
        fileInputRef.current.click()
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0]
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setSelectedImage({
                    file,
                    name: file.name,
                    url: reader.result
                });
            }
        };

        if (file) {
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="data-container">
            <div className="to-NFT-Title">上傳圖片</div>
            <div className="upload-container" onClick={handleChooseFile}>
                <div className="uploadtoNFT">
                    <input
                        type='file'
                        accept='image/*'
                        multiple
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                    />
                    {!selectedImage && <FontAwesomeIcon
                        icon={faFileImport}
                        size='5x'
                    />}
                    {selectedImage && (
                        <div className="show-NFT-image">
                            <img
                                src={selectedImage.url}
                                alt="上傳的圖片"
                                style={{ width: '100px' }}
                            />
                            <input
                                className="image-name"
                                type="text"
                                value={selectedImage.name}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Step2ToNFT
