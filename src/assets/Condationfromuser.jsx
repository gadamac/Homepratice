import { useState } from "react";

function Checkkk() {
  let [vara, setVara] = useState();

  const handleChange = (event) => {
    setVara(parseInt(event.target.value));
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      {vara === 1 ? (
        <h1>true</h1>
      ) : vara === 2 ? (
        <p>this is two</p>
      ) : (
        <h1>false</h1>
      )}
    </div>
  );
}
export default Checkkk;
