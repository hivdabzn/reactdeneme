import { statusOptions, typeOptions } from "../../utils/constants";
import Input from "./input";
import "./create.scss";
import { useState } from "react";

const Create = () => {
  // sadece status değerini state'de tutuyoruz çünkü seçilen status'e göre tarih inputunun label ve name değerleri değişicek
  const [status, setStatus] = useState("Mülakat");

  // form gönderilince
  const handleSubmit = (e) => {
    // sayfa yenilenmesini engelle
    e.preventDefault();

    // formdaki veirleri bir nesne içersinde kaydet
    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData.entries());

    // todo api'a istek at
    console.log(jobData);
  };

  console.log(status);

  return (
    <div className="create-page">
      <section>
        <h2>Yeni Başvuru Oluştur</h2>

        <form onSubmit={handleSubmit}>
          <Input label="Pozisyon" name="position" />

          <Input label="Şirket" name="company" />

          <Input label="Lokasyon" name="location" />

          <Input
            label="Durum"
            name="status"
            options={statusOptions}
            handleChange={(e) => setStatus(e.target.value)}
          />

          <Input label="Tür" name="type" options={typeOptions} />

          {/* TODO status değerine göre label ve name değerlerini değiştir */}
          <Input
            label={status === "Mülakat" ? "Mülakat Tarihi" : "Tarih"}
            name="date"
            type="date"
          />

          <div className="btn-wrapper">
            <button>Oluştur</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Create;
