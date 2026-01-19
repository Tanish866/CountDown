import { useEffect, useRef, useState } from 'react';
import './CountDown.css';


function CountDown(){
    const [ target, setTarget ] = useState(null);
    const [ diff, setDiff ] = useState(0);
    const id = useRef(null);


    function handleSubmit(){
        id.current = setInterval(() => {
            setDiff(new Date(target) - new Date());
        }, 1000);
    }

    useEffect(() =>{
        if(diff < 0){
            clearInterval(id.current);
        }
    }, [diff])


    const getDays = () => Math.floor(diff / (1000 * 60 * 60 *24));
    const getHours = () => Math.floor((diff / (1000 * 60 * 60)) % 24);
    const getMinutes = () => Math.floor((diff / (1000 * 60)) % 60);
    const getSeconds = () => Math.floor((diff / 1000) % 60);

    return (
        <>
            <h1> Count Down Timer App</h1>
            <div id='input'>
                <input  
                    type="datetime-local" 
                    id='datetime'
                    onChange={(e) => setTarget(e.target.value)}
                />
                <button id='submit' onClick={handleSubmit}>Start</button>
                
            </div>
            <div id='display'>
                <ul>
                    <li id='days'><span>{getDays()}</span>Days</li>
                    <li id='hours'><span>{getHours()}</span>Hours</li>
                    <li id='minutes'><span>{getMinutes()}</span>Minutes</li>
                    <li id='seconds'><span>{getSeconds()}</span>Seconds</li>
                </ul>
            </div>
        </>
    )
}
export default CountDown;