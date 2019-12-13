import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TodoItem from "./TodoItem";
import TodoContext from "../../Context/Todo/todoContext";
import Spinner from "../Layout/Spinner";

const Todos = () => {
  const todoContext = useContext(TodoContext);

  const { todos, filtered, getTodos, loading} = todoContext;
  
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, [])
  
  if (todos !== null && todos.length === 0 && !loading) {
    return <h4>Please add a todo...</h4>
  }

  return (
    <>
      {todos !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(todo => (
              <CSSTransition key={todo._id} timeout={200} classNames="item">
                <TodoItem todo={todo} />
              </CSSTransition>
            ))
            : todos.map(todo => (
              <CSSTransition key={todo._id} timeout={200} classNames="item">
                <TodoItem todo={todo} />
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      ) : <Spinner />}
    </>
  )
}

export default Todos;