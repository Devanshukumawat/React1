import { useState } from "react";

function ExampleState() {

    const [value,setValue] = useState({firstName:"Devanshu",lastName:"kumawat"})

    function handleValue(){
        setValue({...value,firstName:"Manny"})
    }

    return ( 
        <>
            <h1>useState</h1>
            <p>FisrtName :- {value.firstName}   LastName :- {value.lastName}</p>
            <button onClick={handleValue}>Update Data</button>
        </>
     );
}

export default ExampleState;