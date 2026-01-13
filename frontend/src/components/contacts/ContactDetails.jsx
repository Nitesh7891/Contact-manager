import { useContacts } from "../../context/ContactContext";

export default function ContactDetails() {
  const { selectedContact } = useContacts();

  if (!selectedContact)
    return (
      <section className="bg-white border rounded-lg p-6 text-sm text-gray-500">
        Select a contact from the list
      </section>
    );

  return (
    <section className="bg-white border rounded-lg p-6">
      <h2 className="text-sm font-semibold text-gray-900 mb-4">
        Contact Details
      </h2>

      <div className="space-y-2 text-sm">
        <p><span className="text-gray-500">Name:</span> {selectedContact.name}</p>
        <p><span className="text-gray-500">Email:</span> {selectedContact.email}</p>
        <p><span className="text-gray-500">Phone:</span> {selectedContact.phone}</p>
      </div>
    </section>
  );
}
