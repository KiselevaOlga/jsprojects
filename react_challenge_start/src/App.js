import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import {generateId} from "./utilities";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts]=useState([
    {
      name: 'Olga',
      phone: 98887776655,
      email: 'olga@gmail.com',
      id: generateId()
    },
  ])

  function addContact (name, phone, email) {
   setContacts(prev=>[{
     name: name,
     phone: phone,
     email: email,
     id: generateId()
   }, ...prev])
  }

  const [appointments, setAppointments]=useState([
    {
      title: 'Go to salon',
      contact: 'Link to contact',
      date: '15.12.2002',
      time: '15:30'
    }
  ])

  function addAppointment(newAppointment){
    setAppointments(prev=>[{
      title: newAppointment.title,
      contact: newAppointment.contact,
      date: newAppointment.date,
      time: newAppointment.time
    }, ...prev])
  }

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */


  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} addAppointment={addAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
