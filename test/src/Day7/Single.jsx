import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Avatar} from "@mui/material"

function Single() {
    const ProductId = useParams()
    const [single,setSingle] = useState([])


    console.log(single)

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${ProductId.id}`).then((res)=>{
            return  res.json()
          }).then((data)=>{
                setSingle(data)
          })
    })
    
    return ( 
        <>
           
            <h1>Single Product  {ProductId.id} {single.title}</h1>
            <Avatar>{single.title && single.title[0]}</Avatar>
            
        </>
     );
}

export default Single;