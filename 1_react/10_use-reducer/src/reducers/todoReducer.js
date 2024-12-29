const todoReducer1 = (state, action) => {
  if (action.type === "TOGGLE") {
    return { ...state, isDarkTheme: !state.isDarkTheme };
  }

  if (action.type === "CREATE") {
    // -todoya id ekle
    const newTodo = { id: new Date().getTime(), text: action.payload };

    // -todo nesnesini diziyi ekle
    const updated = state.todos.concat(newTodo);

    // state'in son halini return et
    return { ...state, todos: updated };
  }

  if (action.type === "DELETE") {
    const filtred = state.todos.filter((i) => i.id !== action.payload);

    return { ...state, todos: filtred };
  }

  return state;
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, isDarkTheme: !state.isDarkTheme };

    case "CREATE":
      const newTodo = { id: new Date().getTime(), text: action.payload };

      const updated = state.todos.concat(newTodo);

      return { ...state, todos: updated };

    case "DELETE":
      const filtred = state.todos.filter((i) => i.id !== action.payload);

      return { ...state, todos: filtred };

    default:
      return state;
  }
};

export default todoReducer;
