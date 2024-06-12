import { useState } from "react";
import Another from "./Another";

function Data() {

    let products = [
        {Pname:"I-phone",Pprice:"$567"},
        {Pname:"Samsung",Pprice:"$456"},
        {Pname:"Nokia",Pprice:"$999"},
        {Pname:"Mi",Pprice:"$527"},

    ]

    const  [data,setData] = useState(products)
    return ( 
        <>
            {
                data.map((value)=>(
                    <Another PData = {value}/>
                ))
            }
        </>
     );
}

export default Data;