import UserCard from "./UserCard";
export const Main = () => {
  // Eğer kullanıcı adminse Yönetici girişi değilse kullanıcı girişi yazdırın.
  const isAdmin = false;
  const krediNotu = 80;
  const user = [
    {
      id: 1,
      userName: "Cihan",
      desc: "Geleceğin başarılı yazılımcısı...",
      img: "https://picsum.photos/200",
    },
    {
      id: 2,
      userName: "Yasin",
      desc: "Geleceğin başarılı yazılımcısı...",
      img: "https://picsum.photos/201",
    },
    {
      id: 3,
      userName: "Merve",
      desc: "Geleceğin başarılı yazılımcısı...",
      img: "https://picsum.photos/202",
    },
    {
      id: 4,
      userName: "Evrim",
      desc: "Geleceğin başarılı yazılımcısı...",
      img: "https://picsum.photos/203",
    },
    {
      id: 5,
      userName: "Yaren",
      desc: "Geleceğin başarılı yazılımcısı...",
      img: "https://picsum.photos/204",
    },
    {
      id: 6,
      userName: "Can",
      desc: "Geleceğin başarılı yazılımcısı...",
      img: "https://picsum.photos/205",
    },
  ];

  return (
    <main className="bg-success d-flex flex-column p-5 ">
      {/*  Koşullu  Renderlama */}
      {/* Ternary Operatör */}
      {isAdmin ? <h1>Yönetici Girişi</h1> : <h1>Kullanıcı Girişi</h1>}
      {/* & Operatörü */}
      {krediNotu >= 85 && <h1>Kredi Alabilir</h1>}

      {user.map((item) => (
        <UserCard
          key={item.id}
          userName={item.userName}
          desc={item.desc}
          img={item.img}
        />
      ))}
    </main>
  );
};
