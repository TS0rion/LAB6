import React, { useState } from "react";

export default function RandomMath() {
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    if (min > max) {
      alert("Min phải nhỏ hơn hoặc bằng Max");
      return;
    }

    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setResult(random);
  };

  return (
    <div className="flex flex-col border-1 p-3 w-[382px] ">
      <div className="flex rounded-sm border-gray-400  justify-center items-center">
        <span className="w-[60%] ml-3 font-semibold text-3xl">{result}</span>
        <div className="flex flex-col justify-center  w-[40%]">
          <div className="flex flex-col">
            <span>Min :</span>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
            />
          </div>
          <hr className="h-1 w-full my-2 bg-gray-400 border-0"></hr>
          <div className="flex flex-col">
            <span>Max :</span>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
            />
          </div>
          <hr className="h-1 w-full my-2 bg-gray-400 border-0"></hr>
        </div>
      </div>
      <button
        className="w-full bg-blue-600 rounded-sm p-1 text-white font-semibold hover:bg-blue-500"
        onClick={handleGenerate}
      >
        Generate
      </button>
    </div>
  );
}
