import "./App.css";
import React , {useState} from "react";

function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e, num) => {
    const value = e.target.value;
    if (num === 1) {
      setNum1(value);
    } else if (num === 2) {
      setNum2(value);
    }
  };

  // console.log(num1 , num2);

  let messageColorClass = '';


  const calculateResult = (operation) => {
    setMessage('');
    setResult('');

    if (num1 === '') {
      setMessage('Error!')
      setResult("Num1 Cannot Be Empty");
      return;
    }
    if (num2 === '') {
      setMessage('Error!')
      setResult("Num2 Cannot Be Empty");
      return;
    }

    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
      setMessage('Error!');
      setResult('Invalid numbers.');
      return;
    }

    let calculatedResult;

    switch (operation) {
      case 'plus':
        calculatedResult = parsedNum1 + parsedNum2;
        break;
      case 'subtract':
        calculatedResult = parsedNum1 - parsedNum2;
        break;
      case 'multiply':
        calculatedResult = parsedNum1 * parsedNum2;
        break;
      case 'divide':
        if (parsedNum2 === 0) {
          setMessage('Error!');
          setResult('Cannot divide by zero');
          return;
        }
        calculatedResult = parsedNum1 / parsedNum2;
        break;
      default:
        setMessage('Error!');
        setResult('Select an operation.');
        return;
    }

    setNum1('');
    setNum2('');
    setMessage('Success');
    setResult(calculatedResult);
  };


  return (
    <div className="main">
      <div className="container">
        <p id="head">REACT CALCULATOR</p>
        <div className="inputs">

          <input 
            type="text" 
            id="num1" 
            placeholder="Num 1"
            value={num1}
            onChange={(e)=> handleInputChange(e,1)}
            />

          <input 
            type="text" 
            id="num2" 
            placeholder="Num 2"
            value={num2}
            onChange={(e)=> handleInputChange(e,2)}
            />

        </div>

        <div className="btns">
          <button onClick={()=> calculateResult('plus')}  className="btn" id="plus">+</button>
          <button onClick={()=> calculateResult('subtract')} className="btn" id="minus">-</button>
          <button onClick={()=> calculateResult('multiply')} className="btn" id="multiply">*</button>
          <button onClick={()=> calculateResult('divide')} className="btn" id="divide">/</button>
        </div>

        <div className="foot-container">
          {message && <p id={`${message=='Error!' ? 'error' : 'success'}`} className="message">{message}</p>}
          {result && <p className="result message">{result}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
