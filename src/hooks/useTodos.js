import { useLocalStorage } from "./useLocalStorage";

export const useTodos = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);

  const addTodo = (text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      comleted: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.comleted,
          };
        }
        return todo;
      })
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  const editTodo = (id, newText) => {
    if (!newText.trim()) return;
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text: newText.trim(),
          };
        } else {
          return todo;
        }
      })
    );
  };
  return { todos, addTodo, toggleTodo, deleteTodo, editTodo };
};
