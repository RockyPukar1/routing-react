import { useState } from "react";

function App() {
  let [count, setCount] = useState(1);

  console.log(count);

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-black text-white"
      >
        Click me
      </button>
    </div>
  );
}

export default App;
