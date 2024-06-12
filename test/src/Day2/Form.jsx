import {useState} from "react"

function Form() {


    // let firstName = "Devanshu"

    // function changeValue (){
    //     let firstName = "Manny"
    //     console.log(firstName)
    // }

    //useState()

    const [firstName,setFirstName] = useState("devanshu")

    function updateValue(){
        setFirstName("Manny")
    }

    return ( 
        <>
            <h1>Form</h1>
            <h1>{firstName}</h1>
            <button onClick={updateValue}>Change Value</button>
        </>
     );
}

export default Form;