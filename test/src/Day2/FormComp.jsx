import { useState } from "react";

function FormComp() {
  const main = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const formcomp = {
    width: "300px",
    height: "300px",
  };

  const [ userName,setUserName ] = useState('Devanshu')
  const [ pass,setPass ] = useState('1234')
  const [value,setValue] = useState("")

  function handleSubmit(e){
      e.preventDefault()
      console.log(`userName :- ${userName} Password :- ${pass} 🙂`)
      setValue(userName)
  }

  function handleUserName(e){
      setUserName(e.target.value)
  }

  function handlePass(e){
    setPass(e.target.value)
  }

  return (
    <>

    
      <div style={main}>
      
        <h1>Hello {value} ... 😍</h1>
        <form style={formcomp} onSubmit={handleSubmit}>
          <label>UserName</label>
          <input type="text" className="form-control"
          value={userName}
          onChange={handleUserName}
           />
          <label>Password</label>
          <input type="password" className="form-control"
          value={pass}
          onChange={handlePass}
           />
          <button type="submit" className="form-control btn-danger mt-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default FormComp;
