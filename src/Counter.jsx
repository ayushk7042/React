//hook useState
import {useState} from "react";
export default function Counter(){
    let [count, setCount] = useState(0);

    console.log(`count =${count}`);   // console.log ( count issue fix)

    let intCount = () => {
        setCount(count +1);
        console.log(`inside incount, count =${count}`);  // console.log ( count issue fix)
    };
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick= {intCount} > Increase button</button>
        </div>
    )
}