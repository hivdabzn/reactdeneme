import React from "react";

/*
 * Sorun
 * Display bileşenin içeriği değişmeyecek olsa bile sırf parent element render oldu diye display bileşenide gereksiz yere render oluyordu
 
 * Çözüm
 * React.memo() bileşene gelen prop'lar değişmedği müddetçe bileşenin render olmasının önüne geçer. Yani parent'component'ın render olması alt component'ı etkilemez.
 
 * Gerkesiz renderları engelleyerek daha performasnlı proje elde ederiz  
 */

const Display = ({ count, increase }) => {
  console.log("🎾 ALT BİLEŞEN RENDER OLDU 🎾");

  return (
    <div>
      <button onClick={increase}>Arttır</button>
      <h1>{count}</h1>;
    </div>
  );
};

export default React.memo(Display);

/*
 * React.memo() çalışma mantığında bir eksik var
 * React.memo() gelen proplar değişmediği müddetçe bileşnin render olmasını engeller
 * string / number / boolean gibi proplarda sorun olmasada fonksiyon proplaronda gelen fonksiyon değişmese bile değişmiş gibi algılayıp gereksiz yere  rendera sebep olur
 */
