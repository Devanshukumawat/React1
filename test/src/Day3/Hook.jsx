import { useState } from "react";

function Hook(){


    // let firtsName = "UseState"
    // function handleValue(){
    //     firtsName = "Hook"
    //     console.log(firtsName)
    // }


    const [firstName,setFirstName] = useState("Jaspreet")

    function handleValue(){
        setFirstName("Manny")
    }

    
    return(
        <>
            <h1>{firstName}</h1>
            <button onClick={handleValue}>Update Nama</button>
        </>
    )
}


export default Hook;