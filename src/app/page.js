"use client";

import { useState } from "react";
import { evaluateExpression } from "../lib/mathEvaluator";

export default function Home() {
  const [display, setDisplay] = useState("");

  function handleClick(value) {
    setDisplay(display + " " + value);
  }

  function isValidExpression(expression) {
    const regex = /^[0-9+\-*/().\s]+$/;
    return regex.test(expression);
  }

  function calculate() {
    try {
      if (!isValidExpression(display)) {
        setDisplay("Error");
        return;
      }

      const result = evaluateExpression(display);
      if (result == null) {
        setDisplay("Error");
        return;
      }

      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  }

  function clear() {
    setDisplay("");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-64 rounded-lg bg-white p-4 shadow-md border-2">
        <input
          type="text"
          value={display}
          readOnly
          className="mb-4 w-full rounded border p-2 text-right text-xl border-black text-black"
        />

        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => handleClick("7")} className="text-black">7</button>
          <button onClick={() => handleClick("8")} className="text-black">8</button>
          <button onClick={() => handleClick("9")} className="text-black">9</button>
          <button onClick={() => handleClick("/")} className="text-black">÷</button>

          <button onClick={() => handleClick("4")} className="text-black">4</button>
          <button onClick={() => handleClick("5")} className="text-black">5</button>
          <button onClick={() => handleClick("6")} className="text-black">6</button>
          <button onClick={() => handleClick("*")} className="text-black">×</button>

          <button onClick={() => handleClick("1")} className="text-black">1</button>
          <button onClick={() => handleClick("2")} className="text-black">2</button>
          <button onClick={() => handleClick("3")} className="text-black">3</button>
          <button onClick={() => handleClick("-")} className="text-black">−</button>

          <button onClick={clear} className="text-black">C</button>
          <button onClick={() => handleClick("0")} className="text-black">0</button>
          <button onClick={calculate} className="text-black">=</button>
          <button onClick={() => handleClick("+")} className="text-black">+</button>
        </div>
      </div>
    </main>
  );
}
