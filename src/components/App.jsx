// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import ContactForm from "./contact-form/Contact Form";
// import SearchBox from "./search-box/SearchBox";
import ContactList from "./contact-list/ContactList";

function App() {
  const dataContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      <ContactList dataContacts={dataContacts} />
    </div>
  );
}

export default App;
