import { useEffect, useState } from "react";
function UserSelector() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {users?.map((user) => (
          <div key={user.id} className="col-md-4 w-50 p-4">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <img src={user.image} className="rounded-circle mb-4" alt="" />
                <h3>{user.firstName} </h3>
                <h3>{user.lastName} </h3>
                <p className="text-muted">{user.email} </p>

                <button className="btn btn-warning">Profile Git</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserSelector;
