import { useParams } from "react-router-dom";
import Ssr from "../media/download (1).jpeg";

function Card({name,field}) {
  const id =  useParams()
  console.log(id)
 
  return (
    <>
    <div className="main">
      <div className="card">
        <h1>{name}</h1>
        <img src={Ssr} alt="" className="img" />
        <h3>{field}</h3>
        <p>
          I chose this track because it will help me come up with suitable
          solutions to problems people around me are facing
        </p>
        <button className="btn">View Profile</button>
      </div>
    </div>
    </>
  );
}

export default Card;
