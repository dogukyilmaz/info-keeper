import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
// import Contacts from "../Contacts/Contacts";
// import ContactForm from "../Contacts/ContactForm";
// import ContactFilter from "../Contacts/ContactFilter";

// import Todos from "../Todos/Todos";
// import TodoForm from "../Todos/TodoForm";
// import TodoFilter from "../Todos/TodoFilter";

import AuthContext from "../../Context/Auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2>Welcome</h2>
      <ul>
        <li>
          For keeping your Todos, just click <Link to="/todos" className="text-success"> here
          </Link>, please.
        </li>
        <li>
          For keeping your Contacts, just click <Link to="/contacts" className="text-success"> here
          </Link>, please.
        </li>
      </ul>
    </>
  )
}

export default Home;
