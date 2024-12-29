/*
 * Aksiyon tipleri string değerler olduğundan dolayı yanlış yazma ihtimalimiz yüksek olan ifadelerdir.
 * Aynı zaman projedeki aksiyon sayısı arttıkça takip etmesi de gerçekten zorlaşıyor.
 * Bu duruma çözüm olarak aksiyon tiplerini bir nesne içerisinde bu dosyada tanımlayp her aksiyona ihtiyaç duyduğumuzda buradan çağırıcaz
 */

const ActionTypes = {
  SET: "SET",
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
};

export default ActionTypes;

// 2.YÖNTEM
// export const CREATE = "CREATE";
// export const DELETE = "DELETE";
