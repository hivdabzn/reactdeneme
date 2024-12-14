# Context

- Prop aktarımı ile proje yapılması durumunda statelerin yönetilmesi bir hayli zor olacağından context yapısı tercih edilir.

# Context Yapısı Nasıl Oluşturulur ?

- React içerisinden createContext import edilir.Sonrasında bu yapı bir değişkene aktarılır.

- Sonrasında bu context içerisindeki değerlerin tüm uygulama içerisinde erişilebilir olması için bir tane HOC oluşturulur.Bu Hoc createContext metodunun atandığı değerin içerisinde bir child ister.Bu child tüm uygulama olunca context içerisindeki değerlere tüm uygulamada erişilebilir.

- Oluşturulan context yapısına erişilmek istendiğinde bu contexte abone olmak gerekir.Abone olmak için useContext çağırılır ve hangi context e abone olunmak istiyorsa bunu söylememiz gerekir.
