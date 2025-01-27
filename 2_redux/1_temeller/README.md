## State İle Alakalı Kavramlar

- State: Uygulamadaki bileşenlerin sahip olduğu bilgi ve özelliklerdir.

- Prop: Bir üst bileşenden alt bileşene veri aktarmak için kullanılan yöntem.

- Context: Uygulamadaki state'i bütün bileşenler tarafından erişlebilen ve oluşturduğumuz merkezlerde yönettiğimiz state yönetim aracı

- Redux: Bileşenlerin sahip olduğu ve merkezi olarak tutulması gereken state'lerin yönetildiği global state yönetim aracı.

## Neden Context Yerine Redux

- Kod tekrarını önler (tek provider)
- Performansı daha iyidir
- Bileşen içerisindeki karışıklığı azaltır
- Hata ayıklama daha kolaydır (devtools)
- - Orta ve büyük ölçekli projelerde state yönetimini daha kolay hale getirir.

## Redux ile ilgili bilinmesi gereken kavramlar

1. Store: Uygulumanın bütün bileşenleri tarafından erişilebilen ve yönetilebilen state deposu

2. Reducer: Dispatch edilen aksiyona göre store'da tutulan state'in nasıl değişeceğine karar veren fonksiyon

3. Action: State'in nasıl değişeceğine ifade eden nesne

- Action, 2 değer sahip bir nesnedir.
- - type: action'un görevini tanımlayan string değer
- - payload: action'un yanında gönderdiğimiz veri

4. Dispatch: Aksiyonu reducer'a göndermeye yarayan fonksiyondur

5. Subscribe: Bileşenlerin store'da tutulan veriye erişim sağlaması

6. Provider: Store'da tutulan verileri uygulamaya sağlar


