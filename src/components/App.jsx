import { useState } from "react";
import "./App.css";
import ContactForm from "./contact-form/ContactForm";
import SearchBox from "./search-box/SearchBox";
import ContactList from "./contact-list/ContactList";

function App() {
  const dataContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [dataSearh, setDataSearch] = useState("");

  const searchBar = dataContacts.filter((contact) =>
    contact.name.toLowerCase().includes(dataSearh.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox dataSearh={dataSearh} setDataSearch={setDataSearch} />
      <ContactList dataContacts={searchBar} />
    </div>
  );
}

export default App;
