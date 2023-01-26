import React, { useState } from "react";
import { toast } from "react-toastify";

function HeadAndTail() {
  //store the single value
  const [inputValue, setInputValue] = useState();
  //store the full array
  const [data, setData] = useState([]);
  //store the previos value
  const [previosValue, setPreviosValue] = useState("");

  const readValue = (e) => {
    const { value } = e.target;
    console.log("value:-", value);
    setInputValue(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!inputValue) {
      console.log("first", inputValue);
      toast.error(" Please select value from dropdown");
    } else {
      console.log("second fill", inputValue);
      toast.success("success");
      setData([...data, inputValue]);
      setInputValue("");
      setPreviosValue(inputValue);
    }
  };
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Head And Tail</h1>
      </div>
      <div className="row mt-5">
        <div className="offset-md-3 col-md-6 ">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <form autoComplete="off" onSubmit={submitHandler}>
                  <div className="input-group my-3">
                    <select
                      className="form-select form-select-lg mby-3"
                      onChange={readValue}
                      value={inputValue}
                    >
                      <option value="">Select Value</option>
                      <option value="H">Head-( H )</option>
                      <option value="T">Tail-( T )</option>
                    </select>
                  </div>
                  <div className="input-group my-3 d-flex justify-content-center">
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </form>
                <div>{data.map((item, index) => {
                 return(
                 <div key={index}> {item}</div>
                 )
                })}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadAndTail;
