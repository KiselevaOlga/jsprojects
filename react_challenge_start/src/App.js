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
      phone: '98887776655',
      email: 'olga@gmail.com',
    },
  ])

  function addContact (name, phone, email) {
   setContacts(prev=>[{
     name: name,
     phone: phone,
     email: email,
   }, ...prev])
  }

  const [appointments, setAppointments]=useState([
    {
      title: 'Go to salon',
      contact: 'Olga',
      date: '15.12.2002',
      time: '15:30'
    }
  ])

  function addAppointment(title, contact, date, time){
    setAppointments(prev=>[{
      title: title,
      contact: contact,
      date: date,
      time: time
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
            <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
