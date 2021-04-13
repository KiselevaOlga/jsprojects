import React from "react";
import {ContactPicker} from "../../components/contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactName=()=>{
    return contacts.map(contact=>contact.name)
  }

  return (
    <form onSubmit={handleSubmit}>
        <label> Title: 
          <input 
              type="text"
              name="title"
              value={title}
              onChange={event=>setTitle(event.target.value)}
              required
          />
        </label>
        <label> Date: 
          <input 
              type="date" 
              min={getTodayString()}
              name="date"
              value={date}
              onChange={event=>setDate(event.target.value)}
              required
          />
        </label>
        <label> Time: 
          <input 
              type="time"
              name="time"
              value={time}
              onChange={event=>setTime(event.target.value)}
          />
        </label>
        <ContactPicker 
            value={contact} 
            onChange={event=> setContact(event.target.value)} 
            contacts={getContactName()}
            name='contact'
            />
        <button type="submit">Add appointment</button>
    </form>
  );
};
