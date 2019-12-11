import React, { useState, useContext, useEffect } from 'react';
import ContactContext from "../../Context/Contact/contactContext";


const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if(current !== null) {
      setContact(current);
    }
    else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, current])

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, email, phone, type } = contact;

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(current === null) {
      addContact(contact);
    }
    else {
      updateContact(contact);
    }
    handleClear();
  }

  const handleClear = () => {
    clearCurrent();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className={current ? "text-purple" : "text-primary"}>{current ? "Edit Contact" : "Add Contact"} </h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={handleChange}
        required
      />
      <h5>Contact Type</h5>
      <label>
        <input
          type="radio"
          name="type"
          value="personal"
          checked={type === "personal"}
          onChange={handleChange}
          required
        /> Personal {" "}
      </label>
      <label>
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === "professional"}
          onChange={handleChange}
        /> Professional {" "}
      </label>
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className={"btn btn-block " + (current ? "btn-purple" : "btn-primary")} />
      </div>
      {current && <div>
        <button
          className="btn btn-light btn-block"
          onClick={handleClear}>
          Clear
          </button>
      </div>}
    </form>
  )
}

export default ContactForm;