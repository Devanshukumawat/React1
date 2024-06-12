function Data() {

    const data = [
        {fisrtName:"Devanshu",age:34},
        {fisrtName:"Manny",age:23},
        {fisrtName:"Kizie",age:14},
        {fisrtName:"Devanshu",age:34},
        {fisrtName:"Manny",age:23},
        {fisrtName:"Kizie",age:14}
    ]

    // for loop , map ,forEach




    return ( 
        <>
            <h1>Data</h1>
            {
                data.map((value,index)=>(
                    <h1>FisrtName :- {value.fisrtName} Age:- {value.age}</h1>
                ))
            }
        </>
     );
}

export default Data;