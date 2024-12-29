const Card = (props) => {
  {
    /* İlgili bileşen dışarıda kendisine verilen propları alır */
  }

  return (
    <div className="card  m-5 bg-danger w-25 p-4 ">
      <h1>{props.text} </h1>
      <h3>{props.desc} </h3>
      {/* İlgili noktada bu propları kullanır */}
    </div>
  );
};

export default Card;
