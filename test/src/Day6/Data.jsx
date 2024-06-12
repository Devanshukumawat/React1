// import { useEffect, useState } from "react";

// function Data() {

//     const [value,setValue] = useState(1)
//     const [image,setImage] = useState()
//     const [name,sethello] = useState("Dev")


//     useEffect(()=>{
//         fetch(`https://dummyjson.com/products/${value}`).then((res)=>{
//             return  res.json()
//           }).then((data)=>{
//               console.log(data)
//               setImage(data.images[0])
//           })
//     },[value])

   

//     return ( 
//         <>
//             <h1>Data Comp...</h1>
//             <img src={image} alt="" width={"100px"}/>
//             <h1>{value}</h1>
//             <button onClick={(e)=>{setValue(value+1)}}>Next</button>
//             <button onClick={(e)=>{setValue(value-1)}}>Pre</button>
//             <h2>{name}</h2>
//             <button onClick={(e)=>{sethello("Manny")}}>Update Name</button>
//         </>
//      );
// }

// export default Data;




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Data() {

   const [product,setProduct] = useState([])
   
    console.log(product)

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/`).then((res)=>{
            return  res.json()
          }).then((data)=>{
              setProduct(data.products)  
          })
    },[])

   

    return ( 
        <>
            <h1>Data Comp...</h1>

            {
                product.map((value,index)=>(
                    <span>
                    <Link to={`/singleproduct/${value.id}`}>
                    <img src={value.images[0]} alt="" width={"100px"} style={{cursor:"pointer"}}/>
                    </Link>
                    
                    </span>
                    
                ))
            }

            
            
        </>
     );
}

export default Data;