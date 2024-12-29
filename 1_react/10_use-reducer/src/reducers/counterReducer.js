/*
 * Reducer fonksiyonunda state'in nasıl değişceğine karar veririz.

 * Reducer fonksiyonu parametre olarak state'in son halini ve dispatch ile anlık olarak sevk edilen aksiyonu alır.

 * Dispatch bir aksiyon her tetiklendiğinde reducer fonksiyonu çalışır ve gelen aksiyona göre state'in nasıl değişceğine karar verir.

 * Reducer fonksiyonun return ettiği değer state'in son hali olur

*/

export const counterReducer = (state, action) => {
  if (action === "ARTTIR") return state + 1;
  if (action === "AZALT") return state - 1;
  if (action === "SIFIRLA") return 0;

  return 999;
};
