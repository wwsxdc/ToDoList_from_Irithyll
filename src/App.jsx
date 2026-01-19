import { useTodos } from "./hooks/useTodos";
import { TodoForm, TodoList } from "./components";

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodos();

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
