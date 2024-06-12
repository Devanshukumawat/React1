import CompStyle from "./style.module.css"

function add(a,b){
    let c = a+b
    return c
}

add(7,9)

function Styling() {
    return ( 
        <>
            <h1>Styling Comp...</h1>
            <form className={CompStyle.formcomp}>
                <label>UserName</label>
                <input type="text" className={CompStyle.input}/>
                <button>Submit</button>
            </form>

        </>
     );
}

export default Styling;