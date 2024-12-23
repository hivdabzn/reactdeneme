import { useCallback, useEffect, useMemo, useState } from "react";
import Card from "./card";

const Example = () => {
  const items = ["Elma", "Armut", "Karpuz", "Muz", "Çilek"];

  const [query, setQuery] = useState("");

  // useMemo her renderda yaptığımız hespalamalarda kullanırız
  const filtredItems = useMemo(() => {
    const filtred = items.filter((i) =>
      i.toLowerCase().includes(query.toLowerCase())
    );

    return filtred;
  }, [query]);

  // useCallback aynı fonksiyonun her renderda oluşmasının önüne geçer
  const addToBasket = useCallback((item) => {
    alert(`${item} sepete eklendi`);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Hangi ürünü arıyorsun?"
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filtredItems.map((i) => (
          <Card key={i} item={i} addToBasket={addToBasket} />
        ))}
      </ul>
    </div>
  );
};

export default Example;
