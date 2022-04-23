import React, { useState } from "react";
import Counter from "./Components/Counter";
import './App.css';

export default function App() {
  const [counters, setCounters] = useState([
    { counterNumber: 1, value: 0 },
    { counterNumber: 2, value: 0 },
    { counterNumber: 3, value: 0 }
  ]);

  const handleClickIncreaseAll = () => {
    setCounters(
      counters.map((counter) => {
        return {
          // counterNumber: counter.counterNumber,
          ...counter,
          value: counter.value + 1
        };
      })
    );
  };

  const handleClickDecreaseAll = () => {
    setCounters(
      counters.map((counter) => {
        return {
          // counterNumber: counter.counterNumber,
          ...counter,
          value: counter.value - 1
        };
      })
    );
  };

  const handleIncrease = (counterNumber) => {
    setCounters(
      counters.map((counter) => {
        return counter.counterNumber === counterNumber
          ? { ...counter, value: counter.value + 1 }
          : counter;
      })
    );
  };

  const handleDecrease = (counterNumber) => {
    setCounters(
      counters.map((counter) => {
        return counter.counterNumber === counterNumber
          ? { ...counter, value: counter.value - 1 }
          : counter;
      })
    );
  };

  return (
    <>
      <div className="App">
        {counters.map((counter) => (
          <Counter
            key={counter.counterNumber}
            value={counter.value}
            counterNumber={counter.counterNumber}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        ))}
        <button onClick={handleClickIncreaseAll}>increase all</button>
        <button onClick={handleClickDecreaseAll}>decrease all</button>
      </div>
    </>
  );
}