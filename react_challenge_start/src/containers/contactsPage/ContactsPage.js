import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';


export const ContactsPage = (props) => {

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
        <TileList tiles={contacts}/>
      </section>
    </div>
  );
};
