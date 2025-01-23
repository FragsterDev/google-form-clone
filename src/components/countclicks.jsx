import { useState } from "react";

function CountClicks (){

    const [count, setCount] = useState(0);

    return (
        <>

        <p>Clicks: {count}</p>
        <div></div>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setCount(count+1)}>Increment</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setCount(count-1)}>Decrement</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCount(0)}>Reset</button>
        </>
    );
}

export default CountClicks