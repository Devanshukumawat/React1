import { useState } from "react";


function FormCompo() {
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

  let data = {
    userName:"Manny",
    Password:"34567"
  }

  const [form,setForm] = useState(data)

  function handleSubmit(e){
    e.preventDefault()
    console.log(form.userName , form.Password)
  }
  
  function handleUsername(e){
    setForm({...form,userName:e.target.value})
  }

  function handlePass(e){
    setForm({...form,Password:e.target.value})
  }

  
  return (
    <>

    
      <div style={main}>
      
        <h1>Hello </h1>
        <form style={formcomp} onSubmit={handleSubmit}>
          <label>UserName</label>
          <input type="text" className="form-control"
            value={form.userName}
            onChange={handleUsername}
           />
          <label>Password</label>
          <input type="password" className="form-control"
            value={form.Password}
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

export default FormCompo;
