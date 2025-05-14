import React from 'react'
import { useState } from 'react';
import Pattern from './background';

const App = () => {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(" ");
  const [message, setMessage] = useState(" ");


  // Logic

let calcBmi = (e) => {
  e.preventDefault();

  if (weight == 0 || height == 0) {
    alert("Please Enter a valid value for height and weight.")
  } else {
    const heightM = height / 100
   const calculatedBmi = weight / (heightM * heightM);
    setBmi(calculatedBmi.toFixed(1));

    // Set message based on BMI value
    if (calculatedBmi < 18.5) {
      setMessage("You are Underweight");
    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
      setMessage("You are Normal Weight");
    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
      setMessage("You are Overweight");
    } else {
      setMessage("You are Obese");
    }
  }
}
  // Reload logic
  const handleReload = (e) => {
    e.preventDefault();
    setWeight(0);
    setHeight(0);
    setBmi(" ");
    setMessage(" ");
  }


  return (
    <div className="relative min-h-screen">
      <Pattern/>
      <div className="relative  flex items-center justify-center min-h-screen">
        <div className="form-container">
          <div className="flex justify-center text-2xl font-bold">
            <h1>BMI Calculator</h1>
          </div>
          <form className="form" onSubmit={calcBmi}>

            <div className="form-group">
              <label htmlFor="weight">weight (kg)</label>
              <input type="number" id="weight" name="weight" placeholder='Enter your Weight in lbs' required  value={weight}
                    onChange={(e) => setWeight(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="height">Height (Cms)</label>
           <input type="number" placeholder='Enter your height in Inches'
                id="height"  name="height" value={height}
                onChange={(event) => setHeight(event.target.value)}
                
                />
            </div>
           <div className='flex  gap-4'> 
            <button className="form-submit-btn" type="button" onClick={handleReload}>Reload</button>
           <button className="form-submit-btn" type="submit">Submit</button>
           </div>
           
           <div className=' font-semibold'>
                <h3 className='flex justify-center'>Your BMI value is:{bmi} </h3>
                <p  className='flex justify-center'> Your are {message}</p>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App