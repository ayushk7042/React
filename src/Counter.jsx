//hook useState
import {useState} from "react";
export default function Counter(){
    let [count, setCount] = useState(0);

    let intCount = () => {
        setCount(count +1);
    };
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick= {intCount} > Increase button</button>
        </div>
    )
}