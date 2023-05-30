import React from 'react'
import { useRef, useState } from 'react'
import './StepsToNFT.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'


function Step3ToNFT() {

    const NFTCode = "asdfghjkl4567890";
    const NFTcodeRef = useRef(NFTCode);
    const [copied, setCopied] = useState(false);
    const [isconfirmed, setconfirmed] = useState(false);

    const confirmPublish = () => {
        setconfirmed(true)
    }

    const handleCopyNFTCode = () => {
        navigator.clipboard.writeText(NFTcodeRef.current)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 1500);
            })
            .catch((error) => {
                console.error('複製失敗:', error);
            });
    };

    return (
        <div className="data-container">
            <div className="to-NFT-Title">發行NFT</div>
            {!isconfirmed && <div className="ready-to-NFT">
                <h2>確認發行NFT？</h2>
                <button onClick={confirmPublish}>確認發行</button>
            </div>}
            {isconfirmed && <div className="sucess-to-NFT">
                <h2>發行完成！</h2>
                <div className="icon-inbox-success">
                    <img src="https://cdn.discordapp.com/attachments/743828889276776472/1113040907558723594/image.png" width={'80px'}/>
                    {/* <FontAwesomeIcon
                        icon={faInbox}
                        size='5x'
                    />
                    <FontAwesomeIcon
                        icon={faCheck}
                        size='2x'
                    /> */}
                </div>
                <a>作品的NFT編碼：</a>
                <div className="NFT-code" onClick={handleCopyNFTCode}>
                    <a>{NFTCode}</a>
                    <button>
                        <FontAwesomeIcon
                            icon={faCopy}
                            size='1x'
                        />
                    </button>
                </div>
                {copied && <div className="copy-message">已複製！</div>}
            </div>}
        </div>
    );
}
export default Step3ToNFT
