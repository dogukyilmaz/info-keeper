import React, { useContext, useRef, useEffect, useState } from 'react';
import TodoContext from "../../Context/Todo/todoContext";

const TodoFilter = () => {
  const todoContext = useContext(TodoContext);

  const [header, setHeader] = useState(" ");

  const { filterTodos, clearFilter, filtered } = todoContext;

  const input = useRef("");

  useEffect(() => {
    if(filtered === null) {
      input.current.value = "";
    }
  }, [todoContext, filtered]);

  const handleChange = e => {
    if(input.current.value.trim() !== "") {
      filterTodos(e.target.value);
      setHeader(e.target.value);
    }
    else {
      clearFilter();
    }
  }

  return (
    <form>
      <h2 className={filtered ? "text-purple" : "text-primary"}>{filtered ? `Filter: ${header}` : "Todolar"} </h2>
      <input
        ref={input}
        placeholder="Filter Todos..."
        onChange={handleChange}
        type="text" />
    </form>
  )
}

export default TodoFilter;
