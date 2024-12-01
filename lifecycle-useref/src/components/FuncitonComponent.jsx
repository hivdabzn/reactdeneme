import { useState, useEffect } from "react";

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  // Class componentlerde bulunan lifecycle olaylarını sağlayan 3 adet metodun görevini useEffect tek başıba üstlenir.

  // ! componentDidMount ==> Bileşenin ekrana gelme anını izle
  useEffect(() => {
    console.log(`Bileşen ekrana geldi`);
  });

  // ! componentWillUnmount ==> Bileşen ekrandan gitti
  useEffect(() => {
    return () => {
      console.log(`Bileşen ekrandan gitti `);
    };
  });

  // ! componentDidUpdate ==> Bileşenin güncellenmesini izle

  useEffect(() => {
    console.log(`Bileşen güncellendi`);
  }, [count]);

  // Bu üç özelliğin tek noktada kullanılması

  useEffect(() => {
    console.log(`Function component ekrana geldi / güncellendi 🤩`);

    return () => {
      console.log(`Function component ekrandan gitti 😫`);
    };
  }, [count]);

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
