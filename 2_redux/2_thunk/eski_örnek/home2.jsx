import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../src/redux/actions/restActions";

const Home2 = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // asenkron aksiyon tetikle
    dispatch(getRestaurants());
  }, []);

  return (
    <div>
      <h1>Anasayfa</h1>
      <hr />

      {isLoading ? (
        <h1>Yükleniyor...</h1>
      ) : error ? (
        <h1>Hataa! {error}</h1>
      ) : (
        restaurants.map((i) => <h1>{i.name}</h1>)
      )}
    </div>
  );
};

export default Home2;
