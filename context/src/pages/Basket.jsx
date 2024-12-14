import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import BasketItem from "../components/BasketItem";

const Basket = () => {
  const { basket } = useContext(BasketContext);

  console.log(basket);

  return (
    <div className="container mt-5">
      <h1>Sepet</h1>

      {/* Ürünler  */}
      <div>
        <div className="d-flex flex-column gap-5 mt-5">
          {basket.map((item) => (
            <BasketItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
