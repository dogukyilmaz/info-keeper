import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from "../../Context/Contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const { filterContacts, clearFilter, filtered } = contactContext;

  const input = useRef("");

  useEffect(() => {
    if(filtered === null) {
      input.current.value = "";
    }
  }, [contactContext, filtered]);

  const handleChange = e => {
    if(input.current.value !== "") {
      filterContacts(e.target.value);
    }
    else {
      clearFilter();
    }
  }

  return (
    <form>
      <input
        ref={input}
        placeholder="Filter Contacts..."
        onChange={handleChange}
        type="text" />
    </form>
  )
}

export default ContactFilter;
