import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';


export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const {contacts, addContact}=props;
  const [name, setName]=useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate){
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  useEffect(()=>{
    const findExistingName=()=>{
      const nameExists = contacts.find(contact=> contact.name === name);
      if (nameExists !== undefined){
        return true
      } else{
        return false
      }
    }
    
    if (findExistingName()){
      setDuplicate(true)
    } else {
      setDuplicate(false)
    }
  }, [name, contacts, duplicate])
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  To check for duplicates, implement a call to useEffect that sets the duplicate 
  state variable to true if the name state variable is already in the contacts list
  */

  return (
    <div>
      <section>
        <h2>Add Contact {duplicate ? "Name already exists" : ""}</h2>
        <ContactForm 
          name={name} 
          setName={setName}
          phone={phone} 
          setPhone={setPhone}
          email={email} 
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};
