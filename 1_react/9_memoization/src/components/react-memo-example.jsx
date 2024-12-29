import { useState, useCallback } from "react";
import Display from "./display";

const Example = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  // Sorun: bu fonksiyon bilşeşen her render olduğunda tekrardan oluşturuldur. Her oluşan kopya bellekte farklı bir noktaya kaydedelir

  // useCallback fonksiyonu ilk oluşturduktan sonra önbellekte saklar ve her render sırasında tekrar oluşturmak yerine önbellekte sakladığı methodu getirir
  const increase = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>React.memo() Örneği</h2>

      <Display count={count} increase={increase} />

      <br />
      <br />

      <input
        type="text"
        placeholder="kullanıcı ismi girin..."
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
    </div>
  );
};

export default Example;
