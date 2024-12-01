const UserCard = ({ user }) => {
  // Props alınan bileşende iligli verileri yönetirken props.[ilgili prop adı] yazmamız gerekir.Bu uzun yazımı engellemek için obje dağıtma yöntemi kullanılır.
  // Gelen prop içerisindeki verileri dağıt

  console.log(user);

  return (
    <div className="card mt-4 p-4 shadow d-flex flex-column gap-2">
      <div className="d-flex justify-content-center">
        <img src={user.image} alt="" />
      </div>
      <div className="d-flex gap-4">
        <p className="text-nowrap">
          <span className="badge bg-danger me-4">İsim:</span>
          <span>{user.firstName} </span>
        </p>
        <p className="text-nowrap">
          <span className="badge bg-danger me-4">Soyisim:</span>
          <span>{user.lastName} </span>
        </p>
        <p className="text-nowrap">
          <span className="badge bg-danger me-4">Email:</span>
          <span>{user.email} </span>
        </p>
        <p className="text-nowrap">
          <span className="badge bg-danger me-4">Şehir:</span>
          <span>{user.address.city} </span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
