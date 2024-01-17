import { createSelector } from 'reselect';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    return items.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter && filter.toLowerCase())
    );
  }
);

