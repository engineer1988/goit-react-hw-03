import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = ({ name, number }) => {
  return (
    <div>
      <div>
        <div>
          <p>
            <FaUser />
            {name}
          </p>
        </div>
        <div>
          <p>
            <FaPhoneAlt />
            {number}
          </p>
        </div>
      </div>
      <div>
        <button type="button">Delete</button>
      </div>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Contact;
