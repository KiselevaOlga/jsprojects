import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import {generateId} from "./utilities";

function App() {

  const [contacts, setContacts]=useState([
    {
      name: 'Lanier',
      phone: '98887776655',
      email: 'Lanier@gmail.com',
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
      contact: 'Lanier',
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
            <ContactsPage contacts={contacts} addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
