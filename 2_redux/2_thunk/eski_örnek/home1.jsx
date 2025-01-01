import { useEffect } from "react";
import api from "../src/api/index";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../src/redux/actionTypes";

const Home = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ActionTypes.REST_LOADING });

    api
      .get("/restaurants")
      .then((res) => {
        dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ActionTypes.REST_ERROR, payload: err });
      });
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

export default Home;
