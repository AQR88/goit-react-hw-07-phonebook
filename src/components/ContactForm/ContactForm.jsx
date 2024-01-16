import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContacts } from '../../redux/store';

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
      dispatch(addContacts({ id: nanoid(), name, number }));
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Add name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Add number"
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
