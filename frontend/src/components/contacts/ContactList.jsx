import { useContacts } from "../../context/ContactContext";
import ContactItem from "./ContactItem";

export default function ContactList() {
  const { contacts, loading } = useContacts();

  if(loading) return <p>Loading...</p>;

  return (
    <div>
      {contacts.map(contact => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </div>
  );
}
