import { useRecoilValue } from "recoil";
import todoAtom from "../states/todoAtom";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useRecoilValue(todoAtom);

  return (
    <div>
      <h2>Danh sách công việc</h2>
      {todos.length === 0 ? (
        <p>Chưa có công việc nào</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}