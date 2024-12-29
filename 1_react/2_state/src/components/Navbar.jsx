import { useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`${
        isDark ? "bg-black text-white p-4 mt-5" : "bg-body p-4 mt-5"
      }`}
    >
      {/* isDark değişkenine bağlı olarak ilgili classı dinamik hale getirdik.  */}
      <header className="mt-3 d-flex justify-content-between p-4">
        <h1>Udemig</h1>
        {/* Buradaki !isDark kullanımı mevcut değerin karşıtını almamızı sağladı.Yani state true ise bunu false a ; false ise bunu true ya çevirdi */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={`${isDark ? "btn btn-light" : "btn btn-dark"}  `}
        >
          {/* Ternary operatör kullanarak ilgili buton içeriğini dinamik hale getirdik. */}
          {isDark ? "Light Theme" : "Dark Theme"}
        </button>
        {/* isDark değişkenine bağlı olarak ilgili classı dinamik hale getirdik.  */}
      </header>
      <h1>React Dersi</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
        dolores, odio temporibus dolor quaerat veniam id provident quod nostrum,
        cum assumenda delectus recusandae autem labore incidunt saepe repellat
        animi nobis!
      </p>
    </div>
  );
};

export default Navbar;
