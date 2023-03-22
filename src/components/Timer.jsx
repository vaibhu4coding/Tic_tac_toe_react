import React, {useState, useEffect} from "react";

function Timer() {



    const [time, setTime] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setTime(time+1)
        },1000)
    }, [time])

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Current Time is { time }</p>
        </div>
    )
}

export default Timer