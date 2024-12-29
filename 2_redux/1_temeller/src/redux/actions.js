import ActionTypes from "./actionTypes";

// Aksiyon oluşturan fonksiyonlar
// Aksiyon (nesne) return eden bir fonksiyon yazdık
// Bu fonksiyon sayesinde aksiyona birdan fazla kez ihtiyaç duyarsak oluşacak kod tekrarını önlüyoruz

export const setTodos = (payload) => ({ type: ActionTypes.SET, payload });

export const create = (payload) => ({ type: ActionTypes.CREATE, payload });

export const update = (payload) => ({ type: ActionTypes.UPDATE, payload });

export const remove = (payload) => ({ type: ActionTypes.DELETE, payload });

export const toggle = (payload) => ({ type: ActionTypes.TOGGLE, payload });
