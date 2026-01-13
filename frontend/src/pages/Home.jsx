import Navbar from "../components/layout/Navbar";
import ContactForm from "../components/contacts/ContactForm";
import ContactSearch from "../components/contacts/ContactSearch";
import ContactList from "../components/contacts/ContactList";
import ContactDetails from "../components/contacts/ContactDetails";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <aside className="w-80 bg-white border-r p-4 overflow-y-auto">
          <ContactSearch />
          <div className="mt-4">
            <ContactList />
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          <ContactForm />
          <ContactDetails />
        </main>

      </div>
    </div>
  );
}
