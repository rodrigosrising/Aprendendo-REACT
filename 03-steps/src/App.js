import { Children, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return <Steps />;
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) {
      setStep((curStep) => curStep - 1);
    }
  }
  function handleNext() {
    if (step < messages.length) {
      setStep((curStep) => curStep + 1);
    }
  }

  function handleClose() {
    setIsOpen((is) => !is);
  }
  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              textColor="#FFFFFF"
              bgColor="#7950f1"
              onClick={handlePrevious}
              // text="Previous"
              // emoji="👈"
            >
              <span>👈</span> Previous
            </Button>
            <Button
              textColor="#FFFFFF"
              bgColor="#7950f1"
              onClick={handleNext}
              // text="Next"
              // emoji="👉"
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
