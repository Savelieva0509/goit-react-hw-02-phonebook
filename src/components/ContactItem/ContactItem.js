import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
<div className= {css.contactItem__container}>
      <li key={id} className = {css.contactsList__item}>
            <p>{name}: {number}</p>
                
    </li>
        <button className={css.contactsList__button}type="button" onClick={() => onDeleteContact(id)}>
            Delete
            </button>  
</div>
)

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;