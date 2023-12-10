import { useEffect, useState } from "react";
import { ImCheckmark, ImCross } from "react-icons/im";

import "./App.css";
import { useReducer } from "react";

//! The reducer loads from localStorage, but may need to find if ADD_TASK works / saves  to localStorage

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
    todosArrayDispatch({ type: "CHANGE_TASK_STATUS", payload: name });

    setTodosArray((prevTodosArray) =>
      prevTodosArray.map((task) =>
        task.name === name ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(name) {
    todosArrayDispatch({ type: "DELETE_TASK", payload: name });
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
    todosArrayDispatch({ type: "ADD_TASK", payload: { newTask } });

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

  function todosArrayReducer(state, action) {
    switch (action.type) {
      case "DELETE_TASK":
        return (state) =>
          state.filter((task) => task.name !== action.payload.name);

      case "CHANGE_TASK_STATUS":
        return (state) =>
          state.map((task) =>
            task.name === action.payload.name
              ? { ...task, completed: !task.completed }
              : task
          );
      case "ADD_TASK":
        (state) => {
          const updatedTodosArray = [...state, action.payload.newTask];
          localStorage.setItem("todosArray", JSON.stringify(updatedTodosArray));
          return updatedTodosArray;
        };
        break;
      default:
        break;
    }
    return state;
  }

  const [todosArrayState, todosArrayDispatch] = useReducer(
    todosArrayReducer,
    initialTodosArray
  );
  const [todosArray, setTodosArray] = useState(initialTodosArray);
  // update storage whenever state is changed

  useEffect(() => {
    localStorage.setItem("todosArray", JSON.stringify(todosArray));
  }, [todosArray]);

  return (
    <>
      <h1>17.2 | Reducer CRUD</h1>
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
          {todosArrayState ? (
            todosArrayState.map((task, index) => (
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
