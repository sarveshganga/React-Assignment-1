import React from 'react';
function TodoItem({ item, deleteTask, toggleCompleted }) {
function handleChange() {
 toggleCompleted(item.id);
 }
 
 return (
 <div className="todo-item">
 <input 
 type="checkbox"
 checked={item.completed}
 onChange={handleChange}
 />
<p>{item.text}</p>
 </div>
 );
}
export default TodoItem;