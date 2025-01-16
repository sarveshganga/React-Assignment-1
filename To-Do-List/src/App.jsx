import { useState } from "react";
import Header from "./component/header";
import ToDolist from "./component/ToDolist";
import { v4 as uuidv4 } from "uuid";

import "./component/style.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAdd() {
    if (todo.trim()) {
      setTodos([...todos, { id: uuidv4(), todo , isCompleted: false }]);
      setTodo("");
    }
  }

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function toggleCompletion(id) {
    setTodos(
      todos.map((todos) =>
        todo.id === id ? { ...todos, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Header />
      <div className="Itams">
        <h1>Add Your Task</h1>
        <div className="itam">
          <input
            type="text"
            className="itam-input"
            placeholder="Enter Your Tasks..."
            onChange={handleChange}
            value={todo}
          />
          <button className="itam-button" onClick={handleAdd}>
            Add
          </button>
        </div>
        <h1>Your Tasks</h1>
        {todos.length > 0 ? (
          <ToDolist
            todos={todos}
            toggleCompletion={toggleCompletion}
            handleDelete={handleDelete}
          />
        ) : (
          <p>No tasks yet. Add a task </p>
        )}
      </div>
    </>
  );
}

export default App;