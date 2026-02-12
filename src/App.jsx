import { useState } from "react";

export default function App() {

  // store todos as an array
  const [todos, setTodos] = useState([]);

  function test() {
    console.log("test yhjkljdfkjalksdjflkait");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const value = e.target.title.value;

    if (!value) return; // prevent empty todos

    // add new todo to array
    setTodos([...todos, value]);

    // clear input
    e.target.title.value = "";
  }

  return (
    <div>
      <h1>Todos</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Your todo:"
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <button onClick={test}>Hello</button>

        <h2>My Todo List</h2>

        {todos.length === 0 ? (
          <p>No todos yet</p>
        ) : (
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
