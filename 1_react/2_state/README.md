# Bir klasör içerisinde react projesi oluşturma

- Bir önceki projede terminal vasıtasıyla bir proje oluşturduk.Bu projeyi `npx create-react-app [proje ismi ]` komutuyla oluşturduk.Şimdiyse bu projeyi bir klasör içerisinde oluşturuyoruz.Bunun için yine aynı komutu kullanacağız ama proje ismi yerine `.` yazacağız.Bunun anlamı ilgili projeyi benim belirlediğim dosya içerisine koy demektir.

# Proje ayağa kaldırılırken

- React projesi ayağa kaldırılırken ilgili terminalin hangi konumda olduğuna dikkat etmemiz gerekir.Bir react uygulaması package.json dosyası içerisindeki `start` komutuyla ayağa kalkar.Bu sebeple projeyi ayağa kaldırırken ilgili terminal package.json ile aynı konumda mı bunu kontrol etmemiz gerekir.Eğer değilse ve `npm start` komutu çalıştırılırsa hata alınır ve proje ayağa kalkmaz.

# State

- React da uygulama arayüzünde meydana gelen bir değişime bağlı olarak ekranan güncellenmemesi uygulama içerisinde bir sıkıntı oluşturur.Bu sorunu çözebilmek için state kullanırız.

- State bileşen içerisinde veri tutma ve yönetmeye olanak sağlayan bir yapıdır.State'in değeri değiştiğinde bu state bağlı olarak arayüz güncellenir.

# State Kullanımı

- State tanımı yapabilmek için önce react içerisinde bulunan useState import edilir.Sonrasında useState bir değişkene aktarılır.Bu değişken bir dizi olup içerisinde iki adet değer ister birincisi state'in adı ikincisi bu state'i güncelleyecek fonksiyon.State'ın başlangıç değeri useState'in () içerisinde yazılır.
