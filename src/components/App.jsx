import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/store';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Filtration from './Filtration/Filtration';
import ContactList from './ContactList/ContactList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <h2>Phonebook</h2>
        <ContactForm />
      </Section>
      <Section>
        <Filtration />
        <ContactList />
      </Section>
    </>
  );
};

export default App;
