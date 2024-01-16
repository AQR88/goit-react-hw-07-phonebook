import { createSelector } from 'reselect';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
