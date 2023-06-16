import { useState } from "react";
export default function App() {
  return (
    <>
      <Counter2 />
      <Counter />
    </>
  );
}

function Counter2() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 14 2023");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <>
      <h2>Contador com range</h2>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((count) => count - step)}> - </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={() => setCount((count) => count + step)}> + </button>
      </div>
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
        {count !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </div>
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
      <h2>Contador com botões</h2>
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
