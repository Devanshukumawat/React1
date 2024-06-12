import { useParams } from "react-router-dom";

function Hompage() {
   const myId =   useParams()
   console.log(myId)
    return ( 
        <>
            <h1 style={{textAlign:"center",color:"green"}}>Homepage Comp</h1>
        </>
     );
}

export default Hompage;