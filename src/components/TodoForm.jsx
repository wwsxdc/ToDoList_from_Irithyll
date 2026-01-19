import React, { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введи новую задачу..."
      />
      <button type="submit" className={styles.button}>
        Добавить
      </button>
    </form>
  );
};
export default TodoForm;
