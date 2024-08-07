import React from 'react';
import styled from 'styled-components';
import cameraImg from '../images/camera.png'
import circleImg from '../images/circle.png'
import { useState, useEffect } from 'react';

const cameraWidth = 185;
const circleWidth = 244;
const marginCC = 90;

const Camera = styled.img`
    width: ${cameraWidth}px;
    height: ${cameraWidth}px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
`;

const Circle = styled.img`
    width: ${circleWidth}px;
    height: ${circleWidth}px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
`;

const ShowCamera = () => {
    const [rotationDegree, setRotationDegree] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotationDegree((prevDegree) => (prevDegree + 20) % 360);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="camera-container">
            <Camera src={cameraImg} alt="Camera" />
            <Circle
                src={circleImg}
                alt="Circle"
                style={{ transform: `translate(-50%, -50%) rotate(${rotationDegree}deg)` }}
            />
        </div>
    );
};

export default ShowCamera;
