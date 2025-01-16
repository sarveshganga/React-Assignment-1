import React, { useState } from "react";
import "./style.css";

function ToDolist({ todos: initialTodos = [] }) {
  const [todos, setTodos] = useState(initialTodos);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  
  function handleDelete(id) {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  }

  function handleCheck(id) {
    const updatedTodos = todos.map((item) =>
      item.id === id
        ? { ...item, isCompleted: !item.isCompleted }
        : item
    );
    setTodos(updatedTodos);
  }

  
  function handleEditStart(id, currentText) {
    setEditingId(id);
    setEditText(currentText);
  }

  
  function handleEditSave() {
    const updatedTodos = todos.map((item) =>
      item.id === editingId ? { ...item, todo: editText } : item
    );
    setTodos(updatedTodos);
    setEditingId(null);
    setEditText("");
  }


  function handleComplete(id) {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: true } : item
    );
    setTodos(updatedTodos);
  }

  return (
    <div className="Data">
      {todos.map((item) => (
        <div className="item-data" key={item.id}>
          {editingId === item.id ? (
            <div className="edit-mode">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button className="save-btn" onClick={handleEditSave}>Save</button>
              <button className="cancel-btn" onClick={() => setEditingId(null)}>Cancel</button>
            </div>
          ) : (
            <div className="input-data">
              <input
                id={`todo-checkbox-${item.id}`}
                name={item.id}
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.isCompleted}
              />
              <label
                htmlFor={`todo-checkbox-${item.id}`}
                className={item.isCompleted ? "line-through" : ""}
              >
                {item.todo}
              </label>
              <button  className="Edit-btn" onClick={() => handleEditStart(item.id, item.todo)}>
                Edit
              </button>
              <button
                onClick={() => handleComplete(item.id)}
                disabled={item.isCompleted}
                className="complete-btn"
              >
                Complete
              </button>
              <i
                className="fa-solid fa-trash-can"
                onClick={() => handleDelete(item.id)}
                role="button"
                aria-label={`Delete ${item.todo}`}
              ></i>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ToDolist;
