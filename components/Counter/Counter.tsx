'use client';

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-4 items-center w-[100px]">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Increment
      </button>
      <p className="text-5xl font-bold">{count}</p>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
