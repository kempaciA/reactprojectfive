import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];




export default function App() {

  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);


  function handlePrevious() {
    if(step > 1)
    setStep((s) => s - 1);
  }

  function handleNext() {
    if(step < 3)
    setStep((s) => s + 1)
  }

  function handleClose() {
    setIsOpen((is) => !is)
  }
 
  return (

    <>

    <button onClick={handleClose} className="close">X</button>

   { isOpen && 
   <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>


      <p className="message">Step {step}: {messages[step - 1]}</p>


      <div className="buttons">
        <button onClick={handlePrevious} style={{backgroundColor: "purple", color: "white"}}>Previous</button>
        <button onClick={handleNext} style={{backgroundColor: "purple", color: "white"}}>Next</button>
      </div>
    </div>}
    </>
  )
}