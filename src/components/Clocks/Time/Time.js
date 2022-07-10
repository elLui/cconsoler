import "./Time.css";
import {useEffect, useState} from "react";



const Time = () => {

    // get current time // store it in state
    const [currentTime, setTime] = useState(new Date());

    // resets the time to current time according to intervals from next function timeID
    const refreshClock = () => {
        setTime(new Date());
    }

    useEffect(() => {

        // resets the interval every 1000ms === 1 second
        const timeID = setInterval(refreshClock, 1000);
        const cleanUp = () => {
            // clean-out timer set the previous second
            clearInterval(timeID);
        }
        return cleanUp(timeID);
    }, []);

    return (
        <div>
            {currentTime.toLocaleTimeString()}
        </div>
    )
}

export default Time;
