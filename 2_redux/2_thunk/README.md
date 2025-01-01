# Middleware Nedir ?

- Arayazılım, iki olayın arasında çalışan koddur.
- Örneğin bir api istğeinin bir uçtan diğer uca iletilirken araya girip bu isteği işleyen bir middleware yazılabilir.

# Thunk Middleware'i Nedir ?

- Redux thunk, redux'ta kullanılan middleware'lerden biridir.
- Redux thunk, normalde sadece obje dönen aksiyonlar yerine api isteği ve dispatch yapabilen aksiyonlar yazmamızı sağlar

# Kütüphaneler

- redux
- react-redux
- redux-thunk
- json-server
- axios
- react-router-dom
- uuid
- react-icons
- tailwindcss

# Redux Hata Tespiti

- "Butona tıkladıktan sonra veriler ekrana gelmiyor ama sayfayı yenileyeyince ekrana geliyor"

- - O zaman bu store'un doğru şekilde güncellenmediğini işaret eder.
- - Çünkü biz store'daki state'i ekrana basariz api'daki verileri değil

- "Butona tıklandıktan sonra veriler ekrana geliyor ama sayfayı yenileyince gidiyor"

- - O zaman bu api'ı güncelleme işleminde bir sorun olduğunu işaret eder
- - Çünkü arayüz güncellenmesi store'un başarıyla güncellenmesi anlmına gelir ama sayfayo yenileyeince veriler tekrardan api'dan alınacağı için eğer son eklenen veri gelmiyorsa api güncellenmemiştir
