import { useState } from "react";
import { useContacts } from "../../context/ContactContext";

export default function ContactForm() {
  const { addContact } = useContacts();
  const [form,setForm] = useState({name:"",email:"",phone:""});
  const [error,setError] = useState("");

  const submit = async(e)=>{
    e.preventDefault();
    try{
      await addContact(form);
      setForm({name:"",email:"",phone:""});
      setError("");
    }catch(msg){
      setError(msg);
    }
  };

  return (
    <section className="bg-white border rounded-lg p-5">
      <h2 className="text-sm font-semibold text-gray-900 mb-3">
        Add Contact
      </h2>

      <form onSubmit={submit} className="space-y-3">
        <input className="form-input" placeholder="Name"
          value={form.name}
          onChange={(e)=>setForm({...form,name:e.target.value})} required />

        <input className="form-input" placeholder="Email"
          value={form.email}
          onChange={(e)=>setForm({...form,email:e.target.value})} required />

        <input className="form-input" placeholder="Phone"
          value={form.phone}
          onChange={(e)=>setForm({...form,phone:e.target.value})} required />

        <button className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
          Save
        </button>

        {error && <p className="text-xs text-red-500">{error}</p>}
      </form>
    </section>
  );
}
