function Another(props) {

    // console.log(props)

   const {PData} =props

    return ( 
        <>
            <h1 style={{backgroundColor:"black",color:"white"}}>Another Comp...</h1>
            <h2>{PData.Pname}</h2>
            <h1>{PData.Pprice}</h1>
        </>
     );
}

export default Another;