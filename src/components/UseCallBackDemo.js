import React, { useCallback, useState } from "react";
import Child from "./Child";
function UseCallBackDemo() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const Increment = () => {
    setCount((x) => x + 1);
  };
  const Decrement = () => {
    console.log('clicked')
    setCount1((x) => x - 1);
  };

 
  const fun =useCallback(()=>{
    console.log('hii om i ')
  },[])
  return (
    <div className="container text-center my-5">
      <Child count1={count1} fun={fun} />
      <div className="">
        <button className="btn btn-success mx-2" onClick={Increment}>
          increment - {count}
        </button>
        <button className="btn btn-danger mx-2" onClick={Decrement}>
          Decrement - {count1}
        </button>
      </div>
      
     
    </div>
  );
}

export default UseCallBackDemo;
