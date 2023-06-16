import { useState } from "react";
export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 14 2023");
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <button onClick={() => setStep((count) => count - 1)}> - </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((count) => count + 1)}> + </button>
      </div>

      <div>
        <button onClick={() => setCount((count) => count - step)}> - </button>
        <span>Contador: {count}</span>
        <button onClick={() => setCount((count) => count + step)}> + </button>
      </div>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </>
  );
}
