import { createContext, useState } from "react";

export const BasketContext = createContext();
const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    // Sepette ürün varsa bunu tespit et
    const found = basket.find((i) => i.id === product.id);
    if (!found) {
      // Sepette ürün yoksa bunu sepete ekle
      setBasket(basket.concat({ ...product, amount: 1 }));
    } else {
      // Sepette bulunan ürünün miktarını bir arttır
      const updated = { ...found, amount: found.amount + 1 };
      // Bulunan ürünü dizi içerisinde güncelle
      const newBasket = basket.map((i) => (updated.id === i.id ? updated : i));
      // Diziyi güncelle
      setBasket(newBasket);
    }
  };
  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
