import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  CLEAR_TODOS,
  SET_CURRENT_TODO,
  TODO_ERROR,
  CLEAR_CURRENT_TODO,
  UPDATE_TODO,
  FILTER_TODOS,
  CLEAR_FILTER_TODO,
  SET_DONE_TODO
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
    return {
      ...state,
      todos: action.payload,
      loading: false
    }
    case ADD_TODO:
      return {
        ...state,
        todos: [
          action.payload,
          ...state.todos
        ],
        loading: false
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo =>
          todo._id !== action.payload
        ),
        loading: false
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo._id === action.payload._id ? action.payload : todo
        ),
        loading: false
      }
    case SET_DONE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo._id === action.payload._id ? action.payload : todo
        ),
        loading: false
      }
    case CLEAR_TODOS:
      return {
        ...state,
        todos: null,
        current: null,
        filtered: null,
        error: null
      }
    case SET_CURRENT_TODO:
      return {
        ...state,
        current: action.payload
      }
    case TODO_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case CLEAR_CURRENT_TODO:
      return {
        ...state,
        current: null
      }
    case FILTER_TODOS:
      return {
        ...state,
        filtered: state.todos.filter(todo => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return todo.todoName.match(regex) || todo.todoDetail.match(regex);
        })
      }
    case CLEAR_FILTER_TODO:
      return {
        ...state,
        filtered: null
      }
    default:
      return state;
  }
}