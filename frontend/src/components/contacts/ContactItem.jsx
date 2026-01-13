import { useContacts } from "../../context/ContactContext";

export default function ContactItem({ contact }) {
  const { selectedContact, setSelectedContact, deleteContact } = useContacts();
  const active = selectedContact?._id === contact._id;

  return (
    <div
      onClick={() => setSelectedContact(contact)}
      className={`px-3 py-2 rounded-md cursor-pointer flex justify-between items-center
        ${active ? "bg-indigo-50 border border-indigo-400" : "hover:bg-gray-100"}
      `}
    >
      <div>
        <p className="text-sm font-medium text-gray-900">{contact.name}</p>
        <p className="text-xs text-gray-500">{contact.email}</p>
      </div>

      <button
        onClick={(e)=>{
          e.stopPropagation();
          deleteContact(contact._id);
        }}
        className="text-gray-400 hover:text-red-500 text-sm"
      >
        ✕
      </button>
    </div>
  );
}
