import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Card = ({ product }) => {
  return (
    <div className="mb-10 p-4 border rounded flex gap-4">
      <img src={product.photo} className="size-[100px] rounded-lg" />

      <div className="w-full flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-red-500">{product.title}</h3>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{product.price}$</p>

          <div className="flex items-center border text-xl rounded-lg">
            <button className="basket-btn">
              {product.amount > 1 ? <FaMinus /> : <FaTrash />}
            </button>

            <p className="min-w-[30px] text-center">{product.amount}</p>

            <button className="basket-btn">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
