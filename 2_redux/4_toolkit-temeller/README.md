# Redux Toolkit

- Klasik redux'a göre daha az kod yazarak aynı sonucu elde etmemizi sağlar, yaptığımız bir çok manuel işlem için hazır methodlara sahip bir state yönetim kütüphanesidir.

- İçerisinde redux-thunk ve devtools eklentisi kurulu gelir.

# Kurulum

- npm i @reduxjs/toolkit
- npm i react-redux
- store'u ve reducer'ları oluştur
- store'u projeye tanıt

# Klasik reduxta oluşturduğumuz yapılar

- reducer - action - action types - store

# Toolkitte oluşturuğumuz yapılar

- slice, store

# Slice

- klasik redux'ta aksiyonları, aksiyon tiplerini, reducerları ayro dosyalarda tanımlıyorduk.

- redux toolkit içerisinde yer alan slice yapısı sayesinde tek bir noktada hem reducer'ı hem aksiyonları hemde aksiyon tiplerini tanımlayabiliyoruz

# Bracket Notation

```JS
// Challage:
// Key değişkenin değeri herneyse object isimli nesne içerisindeki o değere erişmeliyiz
// Bracket notation yöntemini bir nesne içersiindeki değere dinamik olarak erişmek istiyorsak veya nesnenin anahtarı özel karakter içeriyorsa kullanırız.

const key = "name";

const object = {
  name: "Ali",
  age: 80,
  "kişi-cinsiyeti": "Erkek",
};

object["kişi-cinsiyeti"];

object["name"];

object["age"];

console.log(object[key]);
