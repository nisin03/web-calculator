"use client";

import { useState } from "react";
import { evaluateExpression } from "../lib/mathEvaluator";

export default function Home() {
  const [display, setDisplay] = useState("");

  function handleClick(value) {
    setDisplay(display + value);
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
      <div className="w-64 rounded-lg bg-white p-4 shadow-md">
        <input
          type="text"
          value={display}
          readOnly
          className="mb-4 w-full rounded border p-2 text-right text-xl"
        />

        <div className="grid grid-cols-4 gap-2">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("/")}>÷</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("*")}>×</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")}>−</button>

          <button onClick={clear}>C</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={calculate}>=</button>
          <button onClick={() => handleClick("+")}>+</button>
        </div>
      </div>
    </main>
  );
}
