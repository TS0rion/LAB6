import React, { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState("");
  const [operator, setOperator] = useState("");
  const [overwrite, setOverwrite] = useState(false);

  const buttons = [
    ["AC", "±", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const handleClick = (btn) => {
    if (!isNaN(Number(btn)) || btn === ".") {
      if (display === "0" || overwrite) {
        setDisplay(btn === "." ? "0." : btn);
        setOverwrite(false);
      } else {
        if (btn === "." && display.includes(".")) return;
        setDisplay(display + btn);
      }
    } else if (["+", "−", "×", "÷"].includes(btn)) {
      setOperator(btn);
      setPrevValue(display);
      setOverwrite(true);
    } else if (btn === "=") {
      if (!operator || !prevValue) return;
      const curr = parseFloat(display);
      const prev = parseFloat(prevValue);
      let result = 0;

      switch (operator) {
        case "+":
          result = prev + curr;
          break;
        case "−":
          result = prev - curr;
          break;
        case "×":
          result = prev * curr;
          break;
        case "÷":
          result = curr === 0 ? NaN : prev / curr;
          break;
      }

      setDisplay(String(result));
      setPrevValue("");
      setOperator("");
      setOverwrite(true);
    } else if (btn === "AC") {
      setDisplay("0");
      setPrevValue("");
      setOperator("");
      setOverwrite(false);
    } else if (btn === "±") {
      setDisplay(String(parseFloat(display) * -1));
    } else if (btn === "%") {
      setDisplay(String(parseFloat(display) / 100));
    }
  };

  return (
    <div className="mt-8 flex flex-col bg-black text-white w-[60%] rounded-xl justify-center shadow-xl overflow-hidden ">
      <div className="p-4 text-4xl font-light text-right">{display}</div>

      <div className="grid grid-cols-4 gap-[1px] bg-gray-700">
        {buttons.flat().map((btn, idx) => {
          const isOperator = ["÷", "×", "−", "+", "="].includes(btn);
          const isZero = btn === "0";

          return (
            <button
              key={idx}
              onClick={() => handleClick(btn)}
              className={`h-16 text-xl ${
                isOperator
                  ? "bg-orange-500 hover:bg-orange-400"
                  : "bg-gray-600 hover:bg-gray-500"
              } ${isZero ? "col-span-2" : ""}`}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
}
