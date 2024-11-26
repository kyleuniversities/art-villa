import CounterSection from "@/components/CounterSection";
import React, { useState } from "react";

export default function Counter() {
  return (
    <div className="flex flex-col items-center w-[100px] mx-4">
      <h1 className="text-7xl">Counter 1</h1>
      <CounterSection />
    </div>
  );
}
