import React, { useState, useEffect, useRef } from 'react';
import './InteractiveArea.scss';

const InteractiveArea = ({ codeResult }) => {

    const [result, setResult] = useState('');

    useEffect(() => {
        var oldAlert = window.alert;
        window.alert = function(message) {
            setResult(message);
        };

        eval(codeResult);

        window.alert = oldAlert; // 恢复原始的 window.alert 函数
    }, [codeResult]);

    return (
        <div className='game-zone'>
            <div>JavaScript:</div>
            <div>{codeResult}</div>
            <div>執行結果:</div>
            <div>{result}</div>
        </div>
    );
};


export default InteractiveArea;


