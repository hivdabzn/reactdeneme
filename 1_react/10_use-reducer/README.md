# useReducer

- Bir react hook'udur.
- Bileşenlerdeki karmaşık state yönetimini daha etkili hale getirmek için kullanılır.
- Bileşen içerisindeki state'i yönetiken useState'in yetersiz kaldığı durumlarda kullanılır.
- Bir bileşende 5-10+ tane state tuutulması gerektiği seneryolarda 10 useState kullanmak yerine aynı sorunu 1 useReducer kullanarak çözebiliyoruz.

# Action

- Aksiyon / Eylem anlamına gelir ve state'in nasıl değişeceğini ifade eden metinlerdir.
- "EKLE" | "SİL" | "GÜNCELLE" | "MESAJ GÖNDER"

# Dispatch

- Sevk etmek anlamına gelen bir fonksiyondur.
- Aksiyonlar'ı reducer adını verdiğimiz yapıya gönderir.
- dispatch("EKLE")  | dispatch("SİL")

# Reducer

- useReducer hooku ile yönettiğimiz state'in nasıl değişeceğine karar veren fonksiyondur.
- Dispatch aracılığı ile aldığı aksiyonlarına bağlı olarak state'de nasıl bir güncelleme olucağını belirler
