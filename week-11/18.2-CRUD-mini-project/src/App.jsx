import { useState, useEffect } from "react";
import "./App.css";
import { getUsers } from "./usersApi";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setUsers(await getUsers());
  }
  console.log("users: ", users);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.username}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
