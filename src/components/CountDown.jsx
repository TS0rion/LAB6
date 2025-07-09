import React, { useEffect, useRef, useState } from "react";

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState(65);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(65);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isRunning && intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const pad = (num) => String(num).padStart(2, "0");
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-blue-400 text-xl">Timer</h1>
      <hr className="w-[200px] mb-4 mt-1 h-[2px] bg-blue-400" />
      <div className="text-[30px] font-mono">{formatTime(timeLeft)}</div>
      <hr className="w-[100px] mb-4 mt-1" />
      <hr className="w-[200px]" />
      <div className="flex space-x-4 text-[12px] font-bold mt-3">
        <button
          className="bg-blue-600 p-2 hover:bg-blue-400 text-white w-[60px]"
          onClick={handleStart}
          disabled={isRunning || timeLeft === 0}
        >
          START
        </button>
        <button
          className="border border-black w-[60px] p-1 text-blue-600 hover:bg-gray-100"
          onClick={handleReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
