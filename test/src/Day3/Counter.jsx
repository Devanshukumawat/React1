import { useState } from "react";
import CounterCss from "./counter.module.css";

function Counter() {

    const [num,setNum] = useState(0)

    function handleIncrement(){
      setNum(num+1)
    }

    function handleDecrement(){
        if(num>0){
            setNum(num-1)
        }
        
    }

  return (
    <>
    <div className={CounterCss.main}>
    <div className={CounterCss.counter}>
    <p>{num>10 ? "Yahooo...!":""}</p>
        <button className={CounterCss.btn1} onClick={handleIncrement}>Increment</button>
        <p className={CounterCss.text}>{num}</p>
        <button className={CounterCss.btn2} onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
      
    </>
  );
}

export default Counter;
