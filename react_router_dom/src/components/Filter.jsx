import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // url'deki arama parametrelerine erişmek ve bu parametreleri yönetmek için  useSearchParams kullanılır.Bu metod url'deki parametrelere erişme ve güncellemek için kullanılır
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();
    // Formun gönderilmesiyle inputtaki değere eriş
    const text = e.target[0].value;

    // url'e  geçilecek parametre ve değeri ayarla
    searchParams.set("search", text);

    // url'e bir arama parametresi geç
    setSearchParams(searchParams);
  };

  return (
    <div className="d-flex justify-content-between align-items-center my-4 gap-3">
      {/* Select */}
      <div>
        <select className="form-select">
          <option value="">sırala</option>
          <option value="">a-z</option>
          <option value="">z-a</option>
        </select>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="kitap ismi giriniz..."
        />
        <button type="submit" className="btn btn-primary">
          Ara
        </button>
      </form>
    </div>
  );
};

export default Filter;
