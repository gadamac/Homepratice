import { useState } from "react";
function Redering2() {
  let [input, setInput] = useState();
  let [result, setResult] = useState();
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleCalculate = () => {
    const number = parseInt(input);
    setResult(
      number === 1
        ? 'You entered one!'
        : number === 2
        ? 'You entered two!'
        : number === 3
        ? 'You entered three!'
        : 'Please enter a valid number (1, 2, or 3)'
    );
  };
 return (
    <>
    <h1>this is for checking the condation with phase</h1>
      <input type="number" value={input} onChange={handleInputChange} />
      <button onClick={handleCalculate}>Calculate</button>
      <h3>{result}</h3>
    </>
  );
}
export default Redering2;