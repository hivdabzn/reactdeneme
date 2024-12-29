import { useMemo, useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState(0);

  /*
   Bilgi: Bileşendeki ilk yüklendiğinde ve state/prop her değiştiğinde bileşen tekrar render olur.

   Sorun: Aşğıdaki hesaplama bileşen her render olduğunda gereksiz yere en baştan tekrar yapılır

   Çözüm: useMemo kullanıp yağtığımız hesaplamanın sonuncu önbelleğe atarak her render sırasında yani sonuç üretmek önbellek'teki veriye kullanarak gereksiz hesaplamaların önüne geçicez
  */

  // 1) maaliyetli hesaplama > api'dan 10000k elemanlı bir dizi gelsin
  const yeniDizi = useMemo(() => {
    const dizi = new Array(10000).fill("Merhaba Dünya");

    // 2) maaliyetli hesaplama > bu veri bize uygun olmadığı için işleyelim
    return dizi.map((item) => item + "!");
  }, [array]);

  return (
    <div>
      <h2>useMemo (Örneği)</h2>

      <button onClick={() => setCount(count + 1)}>Sayacı Arttır</button>

      <h1>{count}</h1>
    </div>
  );
};

export default Example;
