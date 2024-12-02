import { useEffect, useState } from "react";
import axios from "axios";
// Icons Imports
import { RiSearchLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoPersonAdd } from "react-icons/io5";
// Components Import
import Card from "./components/Card";
function App() {
  // Bileşen içerisinde verileri yönetmek için state tanımla
  const [contacts, setContacts] = useState([]);
  // Sayfa yüklendiğinde api'dan verileri al
  useEffect(() => {
    axios
      .get("http://localhost:3000/contact")
      .then((res) => setContacts(res.data));
  }, []);

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();
    // Input içerisindeki değere eriş
    const text = e.target[1].value;

    // api'a gönderilecek parametreleri belirle
    const params = {
      q: text,
    };

    // İnputtan alına değer neticesinde ilgili veriyi api'dan al
    axios
      .get("http://localhost:3000/contact", { params })
      .then((res) => setContacts(res.data));
  };

  return (
    <div className="app">
      {/* Header */}
      <header>
        <h1>Rehber</h1>

        <div>
          <form onSubmit={handleSubmit}>
            <button>
              <RiSearchLine />
            </button>
            <input type="text" placeholder="kişi aratınız ..." />
          </form>

          <button className="ns">
            <IoMenu />
          </button>
          <button className="ns">
            <HiMiniSquares2X2 />
          </button>

          <button className="add">
            <IoPersonAdd />
            <span>Yeni Kişi</span>
          </button>
        </div>
      </header>
      {/* Main */}
      <main>
        {contacts.map((contact) => (
          <Card key={contact.id} contact={contact} />
        ))}
      </main>
    </div>
  );
}

export default App;
