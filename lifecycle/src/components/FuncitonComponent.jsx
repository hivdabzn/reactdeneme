import { useState } from "react";

const CounterFunction = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="m-5 d-flex justify-content-center gap-5 bg-secondary p-5">
      <button onClick={() => setCount(count + 1)} className="btn btn-success">
        Arttır
      </button>
      <h1>{count} </h1>
      <button
        disabled={count === 0}
        onClick={() => setCount(count - 1)}
        className="btn btn-danger"
      >
        Azalt
      </button>
    </div>
  );
};

export default CounterFunction;
