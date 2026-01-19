import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyText}>Нет задач</div>
        <div className={styles.emptySubtext}>
          Добавьте первую задачу с помощью формы выше
        </div>
      </div>
    );
  }
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={(newText) => onEdit(todo.id, newText)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
