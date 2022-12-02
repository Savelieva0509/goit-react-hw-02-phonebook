const ContactList = ({ contacts }) => (
    <ul>
        {contacts.map(({id, name, number}) =>
        <li key={id}>
            <p>{name}: {number}</p>
            <button type="button">
            Delete
            </button>
            </li>
        )}
    </ul>
)


export default ContactList;