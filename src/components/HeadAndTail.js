import React, { useState } from "react";
import { toast } from "react-toastify";

function HeadAndTail() {
  //store the single value
  const [inputValue, setInputValue] = useState("");
  //store the full array
  const [data, setData] = useState([]);

  const readValue = (e) => {
    const { value } = e.target;
    console.log("value:-", value);
    setInputValue(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      toast.error(" Please select value from dropdown");
      return;
    }
    if (data.length === 0) {
      setData(() => [[inputValue]]);
      setInputValue("");
      return;
    }

    const arrayIndex = data[data.length - 1];
    const lastElement = arrayIndex[arrayIndex.length - 1];
    const result = [...data];

    if (lastElement === inputValue) {
      result[result.length - 1] = [...result[result.length - 1], inputValue];
    } else {
      result.push([inputValue]);
    }
    setData(result);
    setInputValue("");
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
                <div>
                  <div className="d-flex justify-content-center">
                    {data.map((item, index) => (
                      <div className="d-flex flex-column m-2" key={index}>
                        {item.map((value, key) => (
                          <p key={key}>{value}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadAndTail;
