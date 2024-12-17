# Kütüphaneler

- react-icons
- react-router-dom
- axios
- react-player
- millify
- tailwindcss

# Tailwind

- Bootstrap eksiklerini kapatan gelişmiş bir verisyonu olarak düşünebiliriz. Bootstrap'ten farklı olarak önceden stillendiriilmiş (btn,card...) gibi componentlara sahip değil ve çok daha özelleştirelebilir ve esnek bir yapıya sahip.

#### [] ile kendi değerimizi tanımlama

- herhangi bir tailwind class'ını kullanıp stil verirken bazen istediğimiz spesifik değerleri bulamayabiliyoruz

- örneğin:
- w-10 genişliği 40px yapıyor ama biz 41px olmasını istiyoruz
- bg-white arkaplanı beyaz yapıyor ama biz #fffff istiyoruz
- text-xl yazı boyutunu 20px yapıyor ama biz 21px istiyoruz

- bu tarz durumlarda "-" devamını [] koyarak bir css dosyasında yazıyor gibi istediğimiz değerleri verebiliyoruz

#### 0-96 değer aralığı

- bootstrap'te margin padding width height... veririken 1-6 aralığında değerler verebiliyorken
- tailwinde 0-96 aralığında değerler vereibillyorusunuz
- bu aralık dışındaki spesefik değerleride [] yöntemi ile tanımlayabiliriz
