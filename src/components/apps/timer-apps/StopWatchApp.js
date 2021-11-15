import React, { useState, useEffect, useRef } from "react";// imports useState, useEffect, and useRef

const StopWatchApp = () => { // stopWatchApp component declaration

    const startTimeRef = useRef(0); // reference value
    const [isRunning, setIsRunning] = useState(false); // state values
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);

    // keeps the time running
    useEffect(() => {
        if(isRunning) {
            const interval = setInterval(update, 10);
            return () => {clearInterval(interval)}
        }
    });

    // method
    const update = () => {
        const delta = Date.now() - startTimeRef.current;
        setTime(time + delta);
        startTimeRef.current = Date.now();
    }

    
    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now()
    }
    const stop = () => {
        setIsRunning(false);
    }
    
    const lap = () => {
        setLaps([...laps, time]);
    }

    const reset = () => {
        setTime(0);
        setLaps([]);
    }

    return ( // display
        <div>
            <h1 className="section-title">React Stopwatch</h1>
            <p>
                {/* math.floor = whole numbers. divide time by 1000 so we are dealing with seconds. then divide by 60 to get the minutes passed */}
                {Math.floor((time / 1000) / 60).toString()} : 
                {/* the modules operator on this line will give us the seconds the remain after we establish how many minutes have passed */}
                {Math.floor((time / 1000) % 60).toString()}
            </p>
            {
                isRunning ? <button onClick={stop}>Stop</button> :
                    <button onClick={start}>Start</button>
            }
            {
                isRunning ? <button onClick={lap}>Lap</button>
                    : <button onClick={reset}>Reset</button>
            }
            {laps.map(time => {
                return (
                    <p>
                        {Math.floor((time / 1000) / 60).toString()} :
                        {Math.floor((time / 1000) % 60).toString()}
                    </p>
                )
            })
            }
        </div>
    );
};

export default StopWatchApp;