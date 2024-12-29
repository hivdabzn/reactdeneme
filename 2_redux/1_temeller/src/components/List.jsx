import { useSelector } from "react-redux";
import Card from "./Card";

const List = () => {
  // bir reducer'da tutulan state'e abone olma
  // reducer'da her state değiştiğinde güncel değerleri direkt alır
  const todoState = useSelector((store) => store.todoReducer);

  console.log(todoState);

  return (
    <div>
      {todoState.todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
