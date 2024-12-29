import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="app">
      <Counter />
      <Navbar />
      <Accordion
        title="useState Nedir?"
        text="useState veri tutma ve bu verileri yönetmeyi sağlayan bir react yapısıdır.Bu yapı sayesinde değişiklik olduğunda arayüzü render edebiliriz."
      />
      <Accordion
        title="Props Nedir?"
        text="Bir bileşeni dinamik hale getirmek için bileşe dışarıdan değer gönderme işlemidir."
      />
      <Accordion
        title="Koşullu Renderlama Nedir ?"
        text="Bir bileşenin belirli bir koşula bağlı olarak render edilmesidir."
      />
      <Accordion
        title="Çoklu Renderlama Nedir ?"
        text="Bir bileşenin çok sayıda render edilmesi işlemidir.Bu işlem sırasında ilgili elemana benzersiz bir key değeri verilmesi unutulmamalıdır."
      />
    </div>
  );
}

export default App;
