import React from "react";

function Main() {
  const [count, setCount] = React.useState(0);
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [todosList, setTodosList] = React.useState([]);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleChange(e) {
    setNewTodoValue(e.target.value);
  }

  function addTodo(e) {
    e.preventDefault();
    setTodosList((prevTodosList) => [...prevTodosList, newTodoValue]);
    setNewTodoValue("");
  }

  const allTodos = todosList.map((todo) => <p key={todo}>{todo}</p>);

  return (
    <div className="main">
      <h1 className="main-title">
        Total: <span>{count}</span>{" "}
      </h1>
      <div className="button-container">
        <button className="main-button" onClick={handleIncrement}>
          +
        </button>
        <button
          className={count > 0 ? "main-button" : "main-button-disabled"}
          onClick={handleDecrement}>
          -
        </button>
      </div>
      <h1 className="main-title">To Do:</h1>
      <div className="todo-container">
        <form action="#">
          <input
            type="text"
            name="todo"
            value={newTodoValue}
            onChange={handleChange}
          />
          <button onClick={addTodo}>Add todo item</button>
        </form>
        {allTodos}
      </div>
    </div>
  );
}

export default Main;
