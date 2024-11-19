import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const { contacts, addContact } = props;

  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    if (contacts) {
      setIsDuplicate(contacts.some((contact) => contact.name === name));
    }
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isDuplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    } else {
      setErrorMessage("Contact name already exists!");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          name={name}
          phone={phone}
          email={email}
       
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objectsArray={contacts} />
      </section>
    </div>
  );
};
