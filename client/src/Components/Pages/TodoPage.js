import React, { useContext, useEffect } from 'react';
import Todos from "../Todos/Todos";
import TodoForm from "../Todos/TodoForm";
import TodoFilter from "../Todos/TodoFilter";

import AuthContext from "../../Context/Auth/authContext";

const TodoPage = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
      <div className="grid-2">
        <div>
          <TodoForm />
        </div>
        <div>
          <TodoFilter />
          <Todos />
        </div>
      </div>
  )
}

export default TodoPage;
