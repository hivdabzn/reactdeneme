import { Link } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";

const Header = () => {
  return (
    <header className="shadow">
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className="text-red-500 font-[900] text-2xl font-mono md:text-3xl"
        >
          ThunkSepeti
        </Link>

        <div className="flex gap-5">
          <Link
            to="/"
            className="flex items-center gap-1 hover:underline cursor-pointer"
          >
            Yakınınızda 10 <IoRestaurant className="text-red-500" />
            <span className="max-md:hidden"> Restoran var</span>
          </Link>

          <button className="button">Giriş Yap</button>
          <button className="button">Kayıt Ol</button>

          <Link
            to="/cart"
            className="flex items-center gap-2 py-2 px-3 hover:bg-red-100 transition rounded-full"
          >
            <BsBasket />
            <span>2</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
