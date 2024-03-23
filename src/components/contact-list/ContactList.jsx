import PropTypes from "prop-types";
import Contact from "../contact/Contact";

const ContactList = ({ dataContacts }) => {
  return (
    <ul>
      {dataContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  dataContacts: PropTypes.array,
};

export default ContactList;
