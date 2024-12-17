import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";

const Detail = () => {
  // arama parametrelerine erişim için kurulum
  const [params] = useSearchParams();

  // url'deki "v" isimli parametreye eriş
  const id = params.get("v");

  // id'si bilinen videonun bilglerini api'dan al
  useEffect(() => {
    const params = { id, extend: 1, geo: "TR", lang: "tr" };

    // todo veirleri state'e aktar ve ekran bas
    api
      .get("/video/info", { params })
      .then((res) => console.log(res.data.data[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Detail;
