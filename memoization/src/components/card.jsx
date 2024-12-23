import React from "react";

const Card = ({ item, addToBasket }) => {
  return <li onClick={() => addToBasket(item)}>{item}</li>;
};

export default React.memo(Card);
