import css from './filtration.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';

const Filtration = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="Search"
        onChange={handleChange}
      />
    </label>
  );
};

export default Filtration;
