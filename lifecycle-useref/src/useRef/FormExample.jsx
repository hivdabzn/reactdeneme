import { useRef, useState } from "react";
const FormExample = () => {
  const [error, setError] = useState({});

  // Mail ve şifre alanlarına erişmek için birer referans oluşturduk
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    // Sayfa yenilemeyi engelle
    e.preventDefault();

    const errors = {};

    // Inputları kontrol et
    if (!emailRef.current.value) {
      errors.email = `Email inputu boş bırakılamaz`;
    } else if (!passwordRef.current.value) {
      errors.password = `Şifre inputu boş bırakılamaz`;
    }

    setError(errors);

    // Obje içerisinde hata olup olmadığını kontrol edebilmek için ilgili objeyi diziye çevir
    if (Object.keys(errors).length > 0) {
      if (errors.email) {
        emailRef.current.focus();
      }
      if (errors.password) {
        passwordRef.current.focus();
      }
    }
  };

  console.log(error);

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-5">
      <div className="relative">
        <label>Email:</label>
        <input ref={emailRef} type="email" className="form-control mt-2" />
      </div>
      {error.email && <p className="bg-danger p-2 rounded-2">{error.email} </p>}
      <div className="relative">
        <label>Şifre:</label>
        <input
          ref={passwordRef}
          type="password"
          className="form-control mt-2"
        />
      </div>
      {error.password && (
        <p className="bg-danger p-2 rounded-2">{error.password}</p>
      )}

      <button className="btn btn-warning" type="submit">
        Gönder
      </button>
    </form>
  );
};

export default FormExample;
