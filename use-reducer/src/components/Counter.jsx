import { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";

const Counter = () => {
  /*
   * Bizden istediği argümanlar
   * 1) reducer fn >> state'in nasıl değişceğine karar veren fn
   * 2) initialState >> tutucağımız ilk değeri
   
   * Bize döndürdüğü değerler
   * 1) state >> state'in güncel hali
   * 2) dispatch >> aksiyonları reducer'a aktaran method
   */
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1 className="text-center">Sayaç</h1>

      <div className="d-flex justify-content-center gap-4 align-items-center mt-5">
        <button onClick={() => dispatch("SIFIRLA")}>Sıfırla</button>
        <button onClick={() => dispatch("AZALT")}>-</button>
        <span className="lead fs-1">{count}</span>
        <button onClick={() => dispatch("ARTTIR")}>+</button>
      </div>
    </div>
  );
};

export default Counter;
