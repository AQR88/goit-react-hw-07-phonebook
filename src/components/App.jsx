import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filtration from './Filtration/Filtration';
import Section from './Section/Section';

const App = () => {
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
