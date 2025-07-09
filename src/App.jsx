import React from "react";
import CountDown from "./components/CountDown";
import Calculator from "./components/caculater";
import RandomMath from "./components/RandomMath";
function App() {
  return (
    <>
      <div className="flex flex-col  items-center justify-center p-3">
        <span className="font-bold text-3xl mt-6">Caculater</span>
        <Calculator />
        <hr className="h-3 w-full my-6"></hr>
        <span className="font-bold text-3xl ">Count down</span>
        <CountDown />
        <hr className="h-3 w-full my-6"></hr>
        <RandomMath />
      </div>
    </>
  );
}

export default App;
