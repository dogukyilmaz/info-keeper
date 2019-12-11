import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import AlertContext from "../../Context/Alert/alertContext";
import AuthContext from "../../Context/Auth/authContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if(isAuthenticated) {
      props.history.push('/');
    }
    if(error === "User already exists!"){
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordR: ''
  });

  const { name, email, password, passwordR } = user;

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please fill all fields...', 'danger');
    }
    else if (password !== passwordR) {
      setAlert('Passwords do not match!', 'danger');
    }
    else {
      register({
        name,
        email,
        password
      });
    }
  }

  return (
    <div className="form-container">
      <h1>Account <span className="text-purple">Register</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordR">Re-Password: </label>
          <input
            type="password"
            name="passwordR"
            value={passwordR}
            onChange={handleChange}
            required
          />
        </div>
        <input type="submit" value="Register" className="btn btn-purple btn-block" />
        <p>Already you have an account? {" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register;