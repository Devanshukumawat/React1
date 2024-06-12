// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// function UseEffectHook() {
//     const [count,setCount] = useState(0)
//     const [name,setNAme] = useState("Devanshu")
//     useEffect(()=>{
//         console.log("UseEffect Hook")
//     },[name])
//     return ( 
//         <>
//             <h1>UseEffect-Hook</h1>
//             <h1>{count}</h1>
//             <button onClick={()=>{setCount(count+1)}}>+</button>
//             <h2>{name}</h2>
//             <button onClick={()=>{setNAme("Manny")}}>Update</button>

//         </>
//      );
// }

// export default UseEffectHook;



function UseEffectHook() {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },1000)
        console.log("UseEffect fun")
    },[count])

    return ( 
        <>
            <h1>Count :- {count}</h1>
        </>
     );
}

export default UseEffectHook;