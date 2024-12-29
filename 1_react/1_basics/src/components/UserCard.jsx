function UserCard(props) {
  return (
    <div className="card p-2 mt-4" style={{ width: 300 }}>
      <img src={props.img} className="card-img" alt="" />
      <div className="card-body">
        <h5>{props.userName} </h5>
        <p>{props.desc}</p>
        <a href="#" className="btn btn-primary">
          Profile Git
        </a>
      </div>
    </div>
  );
}

export default UserCard;
