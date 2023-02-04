import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import HeadAndTail from "./components/HeadAndTail";
import PageNotFound from "./components/PageNotFound";
import { ToastContainer } from "react-toastify";
import UseMemoDemo from "./components/UseMemoDemo";
import UseCallBackDemo from "./components/UseCallBackDemo";
import UseReducerDemo from "./components/UseReducerDemo";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Menu />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Home"} element={<Home />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/HeadAndTail"} element={<HeadAndTail />} />
          <Route path={'/UseMemoDemo'} element={<UseMemoDemo/>}/>
          <Route path={'/UseCallBackDemo'} element={<UseCallBackDemo/>}/>
          <Route path={'/useReducerDemo'} element={<UseReducerDemo/>}/>
          <Route path={"/*"} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
