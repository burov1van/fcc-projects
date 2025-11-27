export const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h1 className="counter__title">Simple Counter</h1>
      <div className="counter__value" aria-live="polite">
        {count}
      </div>
      <div className="counter__controls">
        <button className="btn" onClick={decrement} aria-label="Decrease value">
          -
        </button>
        <button
          className="btn btn--primary"
          onClick={increment}
          aria-label="Increase value"
        >
          +
        </button>
        <button
          className="btn btn--reset"
          onClick={reset}
          aria-label="Reset value"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
