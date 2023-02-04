import React, { useReducer } from "react";
import { initialActions, Counter } from "./DemoActionForUseReducer";
function useReducerDemo() {
  const [state, dispatch] = useReducer(Counter, initialActions);

  const Increment = () => {
    dispatch({ type: "increment" });
  };
 

  return (
    <div className="container my-5 text-center">
      <div>
        <h1>useReducerDemo</h1>
        <br />
        <h1>Count :- {state.count}</h1>
        <div>
          <button className="mx-2 btn btn-success" onClick={Increment}>
            Increment 
          </button>
          <button className="mx-2 btn btn-success" onClick={()=> dispatch({ type: "decrement" })}>
            Decrement 
          </button>
        </div>
        <div className="my-2">
          <button
            className="btn btn-danger"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default useReducerDemo;
