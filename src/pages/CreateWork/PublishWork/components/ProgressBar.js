import './ProgressBar.scss'
import React from 'react';

const ProgressBar = ({ currentStep }) => {

    return (
        <div className="progress-bar">
            <div className={`step ${currentStep == 1 ? 'active' : ''}`}>
                <div className="label">填寫欄位</div>
                <div className="circle">1</div>
            </div>
            <div className={`step ${currentStep == 2 ? 'active' : ''}`}>
                <div className="label">上傳圖片</div>
                <div className="circle">2</div>
            </div>
            <div className={`step ${currentStep == 3 ? 'active' : ''}`}>
                <div className="label">發行NFT</div>
                <div className="circle">3</div>
            </div>
        </div>
    );
};

export default ProgressBar;
