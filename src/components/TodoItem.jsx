import React, { useState } from "react";

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

  return (
    <li className={todo.completed ? "completed" : ""}>
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />
      {isEditing ? (
        <input value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={handleEdit}>
        {isEditing ? "Сохранить" : "Редактировать"}
      </button>
      <button onClick={onDelete}>Удалить</button>
    </li>
  );
};

export default TodoItem;
