import { useContacts } from "../../context/ContactContext";

export default function ContactSearch() {
  const { fetchContacts } = useContacts();

  return (
    <input
      placeholder="Search"
      onChange={(e)=>fetchContacts(e.target.value)}
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
                 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
}
