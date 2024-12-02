import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('SETTING TINEOUT');
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        }
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('SETTING INTERVAL');
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, [])


    return <progress value={remainingTime} max={timeout} id="question-time" className={mode}/>;
} 