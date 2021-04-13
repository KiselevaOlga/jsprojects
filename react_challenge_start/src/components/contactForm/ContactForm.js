import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
      <input 
          type="text" 
          value={name} 
          name="name"
          onChange={(event)=>setName(event.target.value)} 
          required/>
      </label>
      
      <label>Phone:
      <input 
          type="tel" 
          value={phone} 
          name="phone"
          onChange={(event)=>setPhone(event.target.value)} 
          placeholder='###-###-##-##'/>
      </label>
      
      <label>Email:
      <input 
          type="email" 
          value={email}   
          name="email"
          onChange={(event)=>setEmail(event.target.value)} 
          required/>
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
