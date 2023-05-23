import React, { useState, useEffect, useRef } from 'react';
import './InteractiveArea.scss';

const InteractiveArea = ({ codeResult }) => {

    const [result, setResult] = useState('');

    const canvasRef = useRef(null);
    const widthRef = useRef(null);
    const heightRef = useRef(null);

    function clearCanvas() {
        var svg = canvasRef.current;
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }
    }

    function drawCircle(radius, color) {
        var svg = canvasRef.current;
        var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

        circle.setAttribute('cx', widthRef.current / 2);
        circle.setAttribute('cy', heightRef.current / 2);
        circle.setAttribute('r', radius);
        circle.setAttribute('fill', color);
        svg.appendChild(circle);
    }

    function drawResultText(result) {
        var svg = canvasRef.current;
        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', 5);
        text.setAttribute('y', 20);
        text.setAttribute('font-size', '20px');
        text.setAttribute('fill', 'black');
        text.textContent = result;
        svg.appendChild(text);
    }

    useEffect(() => {
        const svg = canvasRef.current;
        const { width, height } = svg.getBoundingClientRect();
        widthRef.current = width;
        heightRef.current = height;
    }, []);


    useEffect(() => {
        var oldAlert = window.alert;
        window.alert = function (message) {
            setResult(message);
        };
        clearCanvas();

        eval(codeResult);

        drawResultText(result);

        window.alert = oldAlert; // 恢復原始的 window.alert 函数
    }, [codeResult, result]);

    //增加可讀性
    const formattedCodeResult = codeResult.split(';').map(line => line.trim()).join(';\n');

    return (
        <div className='game-zone'>
            <svg ref={canvasRef} className="showResult" ></svg>
            {/* 顯示轉換的JS、顯示執行結果 */}
            {/* <div>JavaScript:</div>
            <pre>{formattedCodeResult}</pre>
            <div>執行結果:</div>
            <div>{result}</div> */}
        </div>
    );
};


export default InteractiveArea;

