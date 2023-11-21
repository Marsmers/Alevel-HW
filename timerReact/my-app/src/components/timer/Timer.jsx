import React, { useState, useEffect } from 'react';
import './timer.css';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <div className='container'>
            <div className='timerContainer'>
                <p>{formatTime(seconds)}</p>
                <div className='btn'>
                    <button onClick={handleStart}>Старт</button>
                    <button onClick={handleStop}>Стоп</button>
                    <button onClick={handleReset}>Скидання</button>
                </div>
            </div>
        </div>
    );
};

const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${pad(minutes)}:${pad(remainingSeconds)}`;
};

const pad = (value) => {
    return value.toString().padStart(2, '0');
};

export default Timer;
