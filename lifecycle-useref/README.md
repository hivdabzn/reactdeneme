# Component Türleri

- React'da iki adet component türü bulunmaktadır.

- 1. Class Components

- 2. Function Components

- Tıpkı javascript değişken tanımlama metotlarında olduğu gibi class ve function componentleri arasında da böyle bir ilişki bulunmaktadır.

- Class components daha eski react sürümlerinde bulunan bir component tanımlama yöntemidir.Güncel projelerde yerini funciton component e bırakmıştır.

# Lifecycle

- Tıpkı insanlar gibi bileşenlerde doğar,gelişir ve ölür.Bu olaylara lifecycle yani yaşam döngüsü denir.

- Lifecycle class componentler içerisinde bulunan componentDidMount,componentDidUpdate,componentWillUnmount metotları ile sağlanır.Bu metotlar sırasıyla ilgili bileşenin ekrana gelmesi,güncellenmesi ve ekrandan kaldırılması anını izler.Bu sayede ilgili bileşenin farklı durumlarına bağlı olarak işlevler tetikleyebiliriz.

- Class componentlerin güncel projelerde yerini function componentlere bıraktığını söylemiştik.Function componentler class componentlere göre daha az kod yazmamızı sağlamasına rağmen lifecycle metotlarına sahip değildir.Bu noktada `useEffect` hook(kanca)'u sayesinde bu üç özelliği function componentlere kazandırabiliyoruz.

# Obje Dağıtma(Destructuring):

- React içerisinde objelerden gelen değerleri parçalamak için kullanılan bu metot sayesinde ilgili obje içerisindeki değerlere erişmeye çalışırken uzun uzun obje içerisinde '.' koyarak gezinmemize gerek kalmıyor.

# useRef

- useRef javascript'de ilgili elemanlara uzun uzadıya querySellectorlar getElementById,getElementsByClassName gibi seçicilerle erişmek yerine kullanılan bir react hook'udur.

- Bu hook önce react içerisinde import edilir.Sonrasında bir referansı oluşturulur.Oluşturulan bu referans referansı alınmak istenen elemana ref={} propu olarak verilir.Bu sayede artık ilgili eleman erişilmiş olur.
