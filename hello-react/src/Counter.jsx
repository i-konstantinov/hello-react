import { useState } from "react";

export const Counter = () => {
    // const [count, setCount] = useState(0);
    const [count, setCount] = useState(() => {
        // lazy initialization
        console.log("Counter init");
        return 0;
    });
    // currentValue, setterFunction = useState(ititialValue)

    // let count = 0;
    console.log("Counter rendered with count: ", count);

    const handleClick = () => {
        // count += 1;
        setCount(count + 1);
    }
    return <button onClick={handleClick}>Count: {count}</button>
}