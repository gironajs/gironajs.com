import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount((c) => c + 1)}
      >
        Count is: {count}
      </button>
    </div>
  );
}

export default Counter;
