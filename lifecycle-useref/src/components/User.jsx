import { useState, useEffect } from "react";
import UserCard from "./UserCard";
const User = () => {
  const [id, setId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
  return (
    <div>
      <h1 className="text-center mb-3 mt-2">API'DAN Kullanıcı VERİSİ ALMA</h1>
      <div className="d-flex justify-content-center gap-5">
        <button
          disabled={id === 1}
          onClick={() => setId(id - 1)}
          className="btn btn-danger"
        >
          Geri
        </button>
        <span className="fs-1">{id}</span>
        <button onClick={() => setId(id + 1)} className="btn btn-success">
          İleri
        </button>
      </div>

      {user && <UserCard user={user} />}
    </div>
  );
};

export default User;
