import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <div className={css.contact_card}>
        <div className={css.contact_name_number}>
          <span className={css.contact_svg}>
            <FaUser />
          </span>
          <p>{name}</p>
        </div>
        <div className={css.contact_name_number}>
          <span className={css.contact_svg}>
            <FaPhoneAlt />
          </span>
          <p>{number}</p>
        </div>
      </div>
      <div className={css.contact_delete}>
        <button
          className={css.contact_delete_button}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default Contact;
