import { useState, useEffect } from "react";

export default function AsyncExample() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setTodos(data.map((todo: {title: string})=> todo.title)))
      .catch(() => setError('Error while fetching data'));
  }, []);

  return (
    <div>
      <h1>Todos:</h1>
      <ul>
        {
          todos.length && todos.map((todo) => <li key={todo}>{todo}</li>)
        }
      </ul>
      {
        error && <p>{error}</p>
      }
    </div>
  );
}