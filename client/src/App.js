import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/Routing/PrivateRoute";

import ContactState from "./Context/Contact/ContactState";
import AuthState from "./Context/Auth/AuthState";
import AlertState from "./Context/Alert/AlertState";
import TodoState from "./Context/Todo/TodoState";

import setAuthToken from "./Utils/setAuthToken";

import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Pages/Home";
import TodoPage from "./Components/Pages/TodoPage";
import ContactPage from "./Components/Pages/ContactPage";
import About from "./Components/Pages/About";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Alerts from "./Components/Layout/Alerts";

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <TodoState>
          <AlertState>
            <Router>
              <>
                <Navbar />
                <div className="container">
                  <Alerts />
                  <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute exact path="/todos" component={TodoPage} />
                    <PrivateRoute exact path="/contacts" component={ContactPage} />
                    <Route exact path="/about" component={About} />

                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                  </Switch>
                </div>
              </>
            </Router>
          </AlertState>
        </TodoState>
      </ContactState>
    </AuthState>
  );
}

export default App;