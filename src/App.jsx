import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];






export default function App () {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious () {
    if(step > 1)
    setStep((s) => s - 1)
  }

  function handleNext () {
    if(step < 3)
    setStep((s) => s + 1)
  }


  function handleClose() {
    setIsOpen((a) =>!isOpen )
  }

  return (
    <div>

<button onClick={ handleClose} className="close">X</button>
  
    { isOpen &&
      <div className="steps">
      <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className="message">
        Step{step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          onClick={handlePrevious}
          style={{ backgroundColor: "purple", color: "white" }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          style={{ backgroundColor: "purple", color: "white" }}
        >
          Next
        </button>
      </div>
    </div>}
    </div>
  );

}