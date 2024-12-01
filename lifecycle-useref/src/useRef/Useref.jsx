// useRef i kullanabilmek için react içerisinden import et
import { useRef } from "react";
const UseRef = () => {
  // useRef kullanarak bir referans oluştur
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="my-5 text-center">
      <button onClick={handleClick} className="btn btn-info btn-lg">
        İnputa Odaklan
      </button>

      <input
        // oluşturulan referans ile hangi elemana erişilmek isteniyorsa bu elemana ref propu olarak referansı ilet
        ref={inputRef}
        className="form-control mt-5 "
        type="text"
        placeholder="aramak istediğiniz içeriği yazınız"
      />
    </div>
  );
};

export default UseRef;
