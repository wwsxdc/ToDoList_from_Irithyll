import React, { useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      if (editText.trim() !== "") {
        onEdit(editText);
      }
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li className={`${styles.item} ${todo.completed ? styles.completed : ""}`}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={onToggle}
      />
      {isEditing ? (
        <>
          <input
            className={styles.editInput}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            className={`${styles.button} ${styles.saveButton}`}
            onClick={handleEdit}
          >
            Сохранить
          </button>
          <button
            className={`${styles.button} ${styles.cancelButton}`}
            onClick={handleCancel}
          >
            Отмена
          </button>
        </>
      ) : (
        <>
          <span className={styles.text}>{todo.text}</span>
          <button
            className={`${styles.button} ${styles.editButton}`}
            onClick={handleEdit}
          >
            Редактировать
          </button>
        </>
      )}
      <button
        className={`${styles.button} ${styles.deleteButton}`}
        onClick={onDelete}
      >
        Удалить
      </button>
    </li>
  );
};

export default TodoItem;
