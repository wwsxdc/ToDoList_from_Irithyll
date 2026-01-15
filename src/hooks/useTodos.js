// Хук для управления задачами
import { useLocalStorage } from "./useLocalStorage";

export const useTodos = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);
};
