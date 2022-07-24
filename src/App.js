import { useState } from "react";

function App() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [randomNumber, setRandomNumber] = useState(5);

  const handleClick = () => {
    setRandomNumber(
      Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
    );
  };

  return (
    <div className="main">
      <div className="container">
        <div className="random-container">
          <p>
            Random Number: <span>{randomNumber}</span>
          </p>
        </div>
        <div className="inputs-container">
          <div className="min">
            <p>Min:</p>
            <input
              type="number"
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
            />
          </div>
          <div className="max">
            <p>Max:</p>
            <input
              type="number"
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleClick}>Get Random Number</button>
      </div>
    </div>
  );
}

export default App;
