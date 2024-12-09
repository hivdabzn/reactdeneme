import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import axios from "axios";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  // Kitap verilerini yönetmek için bir state oluştur
  const [books, setBooks] = useState([]);

  // Url'deki parametrelere erişip api'a istek at

  const [searchParams] = useSearchParams();
  useEffect(() => {
    // url deki parametrelere erişip bunları api'a gönder
    const params = {
      q: searchParams.get("search"),
    };

    // Bileşen ekrana geldiğinde api'a istek at
    axios
      .get("http://localhost:3030/books", { params })
      .then((res) => setBooks(res.data));
  }, [searchParams]);

  // ! Burada ilgili arama parametrelerine erişip url'e bunları başarılı bir şekilde geçtik fakat sayfa yenilenene kadar bu parametreye bağlı olarak api isteği gerçekleşmedi.Bunun sebebi api isteğinin bileşenin ekrana geldiği anda yapılmasıydı.Bizde useEffect hookuna bir bağımlılık dizisi vererek bu bileşenin güncellenmesi anında da api isteği attık.

  return (
    <div className="container my-5">
      {/* Bulunan kitaplar  */}
      <h3>10 kitap bulundu</h3>
      {/* Filtreleme alanı */}
      <Filter />
      {/* Kitaplar Alanı */}
      <div className="cards-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Product;
