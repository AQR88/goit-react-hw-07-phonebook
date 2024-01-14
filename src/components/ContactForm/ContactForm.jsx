import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isContactExist = () => {
      return contacts.some(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim() ||
          contact.number.trim() === number.trim()
      );
    };

    if (isContactExist()) {
      alert(`Contact "${name}" is already in contacts😎`);
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
    }
    reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Add name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Add number"
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit" className={css.btn}>
          Add Contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
