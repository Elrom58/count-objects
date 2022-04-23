const Counter = ({ value, counterNumber, handleIncrease, handleDecrease }) => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => handleIncrease(counterNumber)}>+</button>
        <p>{value}</p>
        <button onClick={() => handleDecrease(counterNumber)}>-</button>
      </div>
    );
  };
  
  export default Counter;