import PropTypes from "prop-types";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ dataContacts }) => {
  return (
    <ul className={css.contact_items}>
      {dataContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contact_item}>
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
