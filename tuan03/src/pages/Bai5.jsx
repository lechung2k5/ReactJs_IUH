import React, { useState, useRef } from 'react';

const Bai5 = () => {
    const [time, setTime] = useState(0); 
    const [laps, setLaps] = useState([]); 
    const [isRunning, setIsRunning] = useState(false); 
    const timerRef = useRef(null);
    const inputRef = useRef(null);

    const startTimer = () => {
        if (isRunning) return;
        setIsRunning(true);
        timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 10); 
        }, 10);
    };

    const pauseTimer = () => {
        clearInterval(timerRef.current); 
        setIsRunning(false);
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setTime(0);
        setLaps([]);
    };

    const addLap = () => {
        setLaps([...laps, time]);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const formatTime = (ms) => {
        const minutes = ("0" + Math.floor((ms / 60000) % 60)).slice(-2);
        const seconds = ("0" + Math.floor((ms / 1000) % 60)).slice(-2);
        const milliseconds = ("0" + ((ms / 10) % 100)).slice(-2);
        return `${minutes}:${seconds}:${milliseconds}`;
    };

    return (
        <div className="bai5-container">
            <h1>Bài 5: Stopwatch</h1>
            <div className="stopwatch-display">
                {formatTime(time)}
            </div>

            <div className="controls">
                {!isRunning ? (
                    <button onClick={startTimer}>Start</button>
                ) : (
                    <button onClick={pauseTimer}>Pause</button>
                )}
                <button onClick={resetTimer}>Reset</button>
                <button onClick={addLap}>Add Lap</button>
            </div>

            <div className="lap-input-section" style={{ marginTop: '20px' }}>
                <input
                    ref={inputRef} 
                    type="text"
                    placeholder="Tên vòng chạy (Lap name)..."
                />
            </div>

            <ul className="laps-list">
                {laps.map((lapTime, index) => (
                    <li key={index}>
                        Vòng {index + 1}: {formatTime(lapTime)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Bai5;