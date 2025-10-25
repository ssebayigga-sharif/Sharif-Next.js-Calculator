"use client";

import { useState } from "react";
import { evaluate } from "mathjs";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => setInput("");

  const handleCalculate = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-linear-to-br from-gray-100 to-gray-300">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-80">
        <div className="text-right mb-4 bg-gray-50 p-3 rounded text-2xl font-mono border border-gray-200  min-h-12">
          {input || "0"}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "=" ? handleCalculate() : handleClick(btn)
              }
              className={`p-3 rounded text-lg font-semibold transition ${
                btn === "="
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : ["+", "-", "*", "/"].includes(btn)
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {btn}
            </button>
          ))}

          <button
            onClick={handleClear}
            className="col-span-4 p-3 rounded bg-red-500 text-white font-semibold hover:bg-red-600"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}
