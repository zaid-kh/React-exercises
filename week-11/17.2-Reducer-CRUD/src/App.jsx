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
    todosArrayDispatch({ type: "CHANGE_TASK_STATUS", payload: { name } });
  }

  function deleteTask(name) {
    todosArrayDispatch({ type: "DELETE_TASK", payload: { name } });
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
    e.target.taskName.value = "";
  }

  // initialize array for state
  const initialTodosArray =
    JSON.parse(localStorage.getItem("todosArrayState")) || [];

  function todosArrayReducer(state, action) {
    switch (action.type) {
      case "DELETE_TASK":
        state = state.filter((task) => task.name !== action.payload.name);
        return state;

      case "CHANGE_TASK_STATUS":
        return state.map((task) =>
          task.name === action.payload.name
            ? { ...task, completed: !task.completed }
            : task
        );
      case "ADD_TASK":
        console.log("state: ", state);
        state = [...state, action.payload.newTask];
        localStorage.setItem("todosArrayState", JSON.stringify(state));
        return state;
      default:
        return state;
    }
  }

  const [todosArrayState, todosArrayDispatch] = useReducer(
    todosArrayReducer,
    initialTodosArray
  );

  // update storage whenever state is changed
  useEffect(() => {
    console.log("changed todosArrayState: ", todosArrayState);
    localStorage.setItem("todosArrayState", JSON.stringify(todosArrayState));
  }, [todosArrayState]);

  console.log("todosArrayState: ", todosArrayState);
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
