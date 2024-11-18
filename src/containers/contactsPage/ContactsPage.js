import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {

  const { contacts, addContact } = props;

  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = { name, phone, email };

    if (!isDuplicate) {
      addContact(newContact);
      setName('');
      setPhone('');
      setEmail('');
    } else {
      setErrorMessage('Contact name already exists!');
    }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (contacts) { // Check if contacts exist before using them
      setIsDuplicate(contacts.some(contact => contact.name === name));
    }
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          onSubmit={handleSubmit}
          name={name}
          phone={phone}
          email={email}
          // Pass the setter functions as props
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          errorMessage={errorMessage}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
