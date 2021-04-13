import React from "react";

export const ContactPicker = ({name, contacts, onChange}) => {

  return (
    <select onChange={onChange} name={name}>
      <option selected='selected' value={''} key={-1}>No contact selected</option>
      {contacts && contacts.map(contact=>{
        return (
          <option value={contact} key={contact}>
              {contact}
          </option>
        )
      })}
    </select>
  );
};
