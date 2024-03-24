import PropTypes from "prop-types";
import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import { useId } from "react";

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik>
      <Form className={css.contact_form}>
        <div className={css.contact_form_name_number}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
        </div>
        <div className={css.contact_form_name_number}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
        </div>
        <div className={css.contact_form_div_button}>
          <button className={css.contact_form_button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};
ContactForm.propTypes = {
  // dataSearh: PropTypes.string,
  // setDataSearch: PropTypes.func,
};
export default ContactForm;
