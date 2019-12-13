import React, { useState, useContext, useEffect } from 'react';
import TodoContext from "../../Context/Todo/todoContext";


const TodoForm = () => {
  const todoContext = useContext(TodoContext);

  const { addTodo, current, clearCurrent, updateTodo } = todoContext;

  useEffect(() => {
    if(current !== null) {
      setTodo(current);
    }
    else {
      setTodo({
        todoName: "",
        todoDetail: "",
        done: "false"
      });
    }
  }, [todoContext, current])

  const [todo, setTodo] = useState({
    todoName: "",
    todoDetail: "",
    done: "false"
  });

  const { todoName, todoDetail, done } = todo;

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(current === null) {
      addTodo(todo);
    }
    else {
      updateTodo(todo);
    }
    handleClear();
  }

  const handleClear = () => {
    clearCurrent();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className={current ? "text-purple" : "text-primary"}>{current ? "Edit Todo" : "Add Todo"} </h2>
      <input
        type="text"
        name="todoName"
        placeholder="todoName"
        value={todoName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="todoDetail"
        placeholder="todoDetail"
        value={todoDetail}
        onChange={handleChange}
        required
      />
      <h5>Todo Done?</h5>
      {current &&
        <label>
          <input
            type="radio"
            name="done"
            value={true}
            checked={done == true && true}
            onChange={handleChange}
          /> Done {" "}
        </label>
      }
      <label>
        <input
          type="radio"
          name="done"
          value={false}
          checked={`${!done}`}
          onChange={handleChange}
        /> Not {" "}
      </label>
      <div>
        <input
          type="submit"
          value={current ? "Update Todo" : "Add Todo"}
          className={"btn btn-block " + (current ? "btn-purple" : "btn-primary")} />
      </div>
      {current && <div>
        <button
          className="btn btn-light btn-block"
          onClick={handleClear}>
          Clear
          </button>
      </div>}
    </form>
  )
}

export default TodoForm;