import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    { id: 0, name: "Alice", phone: 1234567890, email: "alice@example.com" },
    { id: 1, name: "Bob", phone: 9876543210, email: "bob@example.com" },
  ]);
  const [appointments, setAppointments] = useState([]);
  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email,
      id: contacts.length + 1,
    };

    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact];
      console.log("Updated contacts:", updatedContacts);
      return updatedContacts;
    });
  };

  const addAppointment = (name, contact, date, time, id) => {
    const newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time,
      id: appointments.length+1,
    };

    setAppointments((prevAppointments) => [
      ...prevAppointments,
      newAppointment,
    ]);
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
            /> 
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            /> 
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
