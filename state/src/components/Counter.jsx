import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // State react içerisinde bulunan useState ile oluşturulur.useState() içerisinde yazılan değer state'in başlangıç değeridir.

  // State oluşturmak için useState bir diziye aktarılır.Bu dizi içerisinde iki değer girilmesini ister.Birincisi bu state'ın ismi ikincisi bu state ı güncelleyecek fonksiyon.

  // State değeri her değiştiğinde bizim için arayüzüde günceller.

  return (
    <div className="  bg-body p-4 d-flex flex-column justify-content-center align-items-center">
      <h1>Counter</h1>
      <div className="d-flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-success px-3"
        >
          Arttır
        </button>
        <h1>{count}</h1>
        <button
          disabled={count === 0}
          onClick={() => setCount(count - 1)}
          className="btn btn-danger px-3"
        >
          Azalt
        </button>
      </div>
    </div>
  );
};

export default Counter;
