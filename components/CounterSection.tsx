"use client";
import React, { useState } from "react";

export default function CounterSection() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center w-[100px] mx-4">
      <p className="text-4xl font-bold">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 rounded text-white px4 py-2 mt4"
      >
        Increment
      </button>
    </div>
  );
}
