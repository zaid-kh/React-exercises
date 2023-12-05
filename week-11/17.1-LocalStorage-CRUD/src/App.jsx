import { useEffect, useState } from "react";
import { ImCheckmark, ImCross } from "react-icons/im";

import "./App.css";

function App() {
  function TaskItem({ name, completed }) {
    const handleClick = () => changeTaskStatus(name);
    const handleDelete = () => deleteTask(name);

    return (
      <li>
        <p onClick={handleClick}>
          {completed ? <ImCheckmark /> : <ImCross />} - {name}
        </p>
        <button onClick={handleDelete}>Delete</button>
      </li>
    );
  }
  function changeTaskStatus(name) {
    setTodosArray((prevTodosArray) =>
      prevTodosArray.map((task) =>
        task.name === name ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(name) {
    setTodosArray((prevTodosArray) =>
      prevTodosArray.filter((task) => task.name !== name)
    );
  }

  function handleSubmit(e) {
    const name = e.target.taskName.value;
    if (!name) return;
    console.log("name: ", name);
    const newTask = {
      name,
      completed: false,
    };
    console.log("newTask: ", newTask);
    setTodosArray((prevTodosArray) => {
      const updatedTodosArray = [...prevTodosArray, newTask];
      localStorage.setItem("todosArray", JSON.stringify(updatedTodosArray));
      return updatedTodosArray;
    });
    e.target.taskName.value = "";
  }
  // initialize array for state
  const initialTodosArray =
    JSON.parse(localStorage.getItem("todosArray")) || [];

  const [todosArray, setTodosArray] = useState(initialTodosArray);
  // update storage whenever state is changed

  useEffect(() => {
    localStorage.setItem("todosArray", JSON.stringify(todosArray));
  }, [todosArray]);

  return (
    <>
      <h1>17.1 | LocalStorage CRUD</h1>
      <h2>TODO List</h2>
      <div className="card">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <input type="text" name="taskName" placeholder="new task" />
          <button>Add</button>
        </form>
      </div>
      <div className="task-list-container">
        <ul className="task-list">
          {todosArray ? (
            todosArray.map((task, index) => (
              <TaskItem
                key={index}
                name={task.name}
                completed={task.completed}
              />
            ))
          ) : (
            <li>no tasks found</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
