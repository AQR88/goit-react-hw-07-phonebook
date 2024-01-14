import css from './Conacts.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(state =>
    state.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
    )
  );

  const handleDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <ul className={css.contacts}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.list}>
          <span className={css.span}>{name}:</span>
          <span className={css.span}>{number}</span>

          <button type="button" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
