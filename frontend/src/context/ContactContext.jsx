import { createContext, useContext, useEffect, useState } from "react";
import contactApi from "../utils/ContactApi";
import { useAuth } from "./AuthContext";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const { user } = useAuth();  // 👈 track login state

  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch contacts only if logged in
  const fetchContacts = async (search = "") => {
    if (!user) return;
    setLoading(true);
    const res = await contactApi.get(`/contacts?search=${search}`);
    setContacts(res.data);
    setLoading(false);
  };

  // Add Contact
  const addContact = async (data) => {
    const res = await contactApi.post("/contacts", data);
    setContacts(prev => [...prev, res.data]); // instant UI update
  };

  // Delete Contact
  const deleteContact = async (id) => {
    await contactApi.delete(`/contacts/${id}`);
    setContacts(prev => prev.filter(c => c._id !== id));
    setSelectedContact(null);
  };

  // When user logs in, load contacts
  useEffect(() => {
    if (user) fetchContacts();
    else setContacts([]); // clear on logout
  }, [user]);

  return (
    <ContactContext.Provider value={{
      contacts,
      selectedContact,
      setSelectedContact,
      fetchContacts,
      addContact,
      deleteContact,
      loading
    }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => useContext(ContactContext);
