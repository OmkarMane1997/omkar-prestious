import React, { useState, useMemo } from "react";

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [ten, setTen] = useState(0);
  const [disable, setDisable] = useState(false);

  const Increment = () => {
    setCount((x) => x + 1);
  };

  useMemo(() => {
    setDisable(true);
    let sum = 0;
    console.time();
    for (let i = 0; i <= 100; i++) {
      sum = sum + i;
    }
    console.log(sum);
    console.timeEnd();
    setDisable(false);
  }, []);

  const Decrement = () => {
    setCount((x) => x - 1);
  };

  function hii() {
    setTen((t) => t + 100);
  }
  return (
    <div className="container text-center my-5">
      <div className="">
        <button className="btn btn-success mx-2" onClick={Increment}>
          increment - {count}
        </button>
        <button className="btn btn-danger mx-2" onClick={Decrement}>
          Decrement - {count}
        </button>
      </div>
      <div className="my-3">
        {`Number is Even or Odd:-${
          count % 2 === 0 ? "Even Number" : "Odd number"
        }`}
      </div>
      <button className="btn btn-success" onClick={hii} disabled={disable}>
        increment By 10 :- {ten}
      </button>
    </div>
  );
}

export default UseMemoDemo;
