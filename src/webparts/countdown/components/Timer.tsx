import * as React from 'react';
import { useState, useEffect } from 'react';

const Timer = (props:any) => {
    const {initialHours=0,initialMinute = 0,initialSeconds = 5} = props;
    const [hours, setHours] = useState(initialHours);
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
                if (seconds === 0) {
                    if (minutes === 0) {
                        if(hours=== 0){
                        clearInterval(myInterval);
                        } else{
                            setHours(hours-1);
                            setMinutes(59);
                            setSeconds(59);
                        }
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
        }, 1000);
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
        { minutes === 0 && seconds === 0 && hours===0
            ? null
            : <h1> {hours}:{minutes < 10 ?  `0${minutes}` : minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    );
};

export default Timer;