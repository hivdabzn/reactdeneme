# React Memoization

- React'ta memoization, bileşenlerin performasını attırmak için velirle işlemlerin sonucunu önbelleğe alma / gereksiz renderlara önleme yöntemidir. Reactt'ta bu amaçla birden fazla yöntem kullanılabilir.

## 1- useMemo()

- useMemo, bir fonksiyonun sonucunu önbelleğe alarak, bileşenin her render sırasında bu fonksiyonu yeniden çalışmaktan kaçınmasını sağlar.
- Genellikle ağır hesaplamalar veya bağımlılıkları değişmedikçe sabit kalan veri işlemlerinde kullanılır.

```js
const yeniDizi = useMemo(() => {
  const dizi = new Array(10000).fill("Merhaba Dünya");

  return dizi.map((item) => item + "!");
}, [array]);
```

## 2- React.memo()

- Bir bileşenin yalnıza props'ları değiştiğinde render edilmesini sağlayan üst bileşenden kaynaklı render edilmesi engelleyen bir methoddur.

```js
useMemo(() => {
  const filtred = items.filter((i) =>
    i.toLowerCase().includes(query.toLowerCase())
  );

  return filtred;
}, [query]);
```

## 3- useCallback()

- Bileşen içerisinde tanımladığımız fonksiyonlar her render sırasında tekrardan oluşur ve bellekte farklı noktalarda tutulur farklı referanslara sahip olurlar
- useCallback kullanarak fonksiyonu önbelleğe alırız ve her render sırasında gereksiz yere tekrardan oluşturulmasını ve bellekte farklı bir referansa sahip olumasının önüne geçeriz
