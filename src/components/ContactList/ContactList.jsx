import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/operations';
import { getFilteredContacts } from '../../redux/selectors';
import css from './Conacts.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  const handleDelete = contactId => {
    dispatch(deleteContacts(contactId));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className={css.contacts}>
      {filteredContacts.map(({ contactId, name, number }) => (
        <li key={contactId} className={css.list}>
          <span className={css.span}>{name}:</span>
          <span className={css.span}>{number}</span>

          <button type="button" onClick={() => handleDelete(contactId)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
