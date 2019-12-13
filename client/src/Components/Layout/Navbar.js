import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import AuthContext from "../../Context/Auth/authContext";
import ContactContext from "../../Context/Contact/contactContext";
import TodoContext from "../../Context/Todo/todoContext";


const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const todoContext = useContext(TodoContext);

  const { isAuthenticated, user, logout } = authContext;
  const { clearContacts } = contactContext;
  const { clearTodos } = todoContext;

  const handleLogout = () => {
    logout();
    clearContacts();
    clearTodos();
  }

  const isUser = (
    <>
      <li>
        <Link to="/todos">
          Todos
      </Link>
      </li>
      <li>
        <Link to="/contacts">
          Contacts
      </Link>
      </li>
      <li><small>Welcome </small> {user && user.name} </li>
      <li>
        <Link to="#!" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt" title="Logout"></i>
        </Link>
      </li>
    </>
  )

  const isGuest = (
    <>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  )

  return (
    <div className="navbar bg-purple">
      <h1>
        <Link to="/">
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        {isAuthenticated ? isUser : isGuest}
      </ul>
    </div>
  )
}

Navbar.prototypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Navbar.defaultProps = {
  title: "Info Keeper",
  icon: "fas fa-id-card-alt"
}

export default Navbar;