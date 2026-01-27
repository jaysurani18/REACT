import React, { useState } from "react";

export default function TodoHook() {
  const [todo, setTodo] = useState({
    title: "",
    priority: 1,
    completed: false,
    category: "",
  });

  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo.title.trim() === "") return;

    setTodoList([...todoList, todo]);
    setTodo({
      title: "",
      priority: 1,
      completed: false,
      category: "",
    });
  };

  return (
    <>
      <h2>📝 Todo App</h2>

      <label>Title:</label>
      <input
        type="text"
        value={todo.title}
        placeholder="Enter task"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />

      <br />

      <label>Priority:</label>
      <input
        type="number"
        min="1"
        value={todo.priority}
        onChange={(e) =>
          setTodo({ ...todo, priority: Number(e.target.value) })
        }
      />

      <br />

      <label>Category:</label>
      <input
        type="text"
        value={todo.category}
        placeholder="Work / Personal"
        onChange={(e) => setTodo({ ...todo, category: e.target.value })}
      />

      <br />

      <label>Completed:</label>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({ ...todo, completed: e.target.checked })
        }
      />

      <br />
      <button onClick={addTodo}>Add Todo</button>

      <hr />

      <h3>Todo List</h3>
      {todoList.map((item, index) => (
        <div key={index}>
          <p>
            <b>{item.title}</b> | Priority: {item.priority} | {item.category} |
            Status: {item.completed ? "Done ✅" : "Pending ⏳"}
          </p>
        </div>
      ))}
    </>
  );
}
