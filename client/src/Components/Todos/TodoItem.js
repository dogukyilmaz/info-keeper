import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TodoContext from "../../Context/Todo/todoContext";

const TodoItem = ({ todo }) => {
  const todoContext = useContext(TodoContext);
  const { deleteTodo, setCurrent, clearCurrent } = todoContext;

  const { _id, todoName, setDone ,todoDetail, done } = todo;

  const handleDelete = () => {
    deleteTodo(_id)
    clearCurrent();
  }

  const handleEdit = () => {
    setCurrent(todo);
  }

  const handleDone = (_id) => {
    setDone(_id);
  }

  return (
    <div className={"card todo-item " + (done === true ? "bg-lightsuccess" : "bg-light")}>
      <h3 className="text-primary text-left todo-tick">
        {todoName} {" "} 
        {/* type.charAt(0).toUpperCase() + type.slice(1)   */}
        <span onClick={handleDone} style={{ textTransform: "capitalize", float: "right" }}> {done === true ? 
        <i className={"fas fa-check-circle " + (done === true ? "text-success" : "text-primary")}></i> : 
        <i className="far fa-check-circle"></i>} </span>
      </h3>
      <ul className="list">
        {todoDetail && (
          <li>
            <i className="far fa-comment-dots"></i> {todoDetail}
          </li>
        )}
        {/* {done && (
          <li>
            <i className=" fas fa-phone"></i> {done}
          </li>
        )} */}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={handleEdit}>Edit</button>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
      </p>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
