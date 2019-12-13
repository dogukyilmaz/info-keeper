import React, { useReducer } from "react";
import axios from "axios";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  CLEAR_TODOS,
  TODO_ERROR,
  SET_CURRENT_TODO,
  CLEAR_CURRENT_TODO,
  UPDATE_TODO,
  FILTER_TODOS,
  CLEAR_FILTER_TODO
} from "../types";

const TodoState = props => {
  const initialState = {
    todos: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  //  Get Todos
  const getTodos = async () => {
    try {
      const res = await axios.get('/api/todos')
      dispatch({
        type: GET_TODOS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.message
      })
    }
  }

  // Add Todo
  const addTodo = async todo => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const res = await axios.post('/api/todos', todo, config)
      dispatch({
        type: ADD_TODO,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.message
      })
    }
  }

  // Delete Todo
  const deleteTodo = async id => {
    try {
      await axios.delete(`/api/todos/${id}`)
      dispatch({
        type: DELETE_TODO,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.message
      })
    }
  }

  // Set Done Todo
  // const setDone = async todo => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   }
  //   try {
  //     const res = await axios.put(`/api/todos/${todo._id}`, todo, config)
  //     dispatch({
  //       type: SET_DONE_TODO,
  //       payload: res.data
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: TODO_ERROR,
  //       payload: err.response.message
  //     });
  //   }
  // }

  // Update Todo
  const updateTodo = async todo => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const res = await axios.put(`/api/todos/${todo._id}`, todo, config)
      dispatch({
        type: UPDATE_TODO,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: TODO_ERROR,
        payload: err.response.message
      });
    }
  }

  // Clear Todos
  const clearTodos = () => {
    dispatch({
      type: CLEAR_TODOS
    })
  }

  // Set Current Todo
  const setCurrent = todo => {
    dispatch({
      type: SET_CURRENT_TODO,
      payload: todo
    });
  }

  // Clear Current Todo
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT_TODO
    });
  }

  // Filter Todos
  const filterTodos = input => {
    dispatch({
      type: FILTER_TODOS,
      payload: input
    });
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER_TODO
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addTodo,
        deleteTodo,
        setCurrent,
        clearCurrent,
        updateTodo,
        filterTodos,
        clearFilter,
        getTodos,
        clearTodos,
        // setDone
      }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoState;