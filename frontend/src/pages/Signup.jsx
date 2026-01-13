import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form,setForm] = useState({name:"",email:"",password:""});
  const [error,setError] = useState("");

  const submit = async(e)=>{
    e.preventDefault();
    try{
      await signup(form.name, form.email, form.password);
      navigate("/login");
    }catch{
      setError("Email already exists");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#F7F8FA]">
      <div className="bg-white border rounded-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Create Account</h2>

        <form onSubmit={submit} className="space-y-3">
          <input className="form-input" placeholder="Name"
            onChange={(e)=>setForm({...form,name:e.target.value})} required />

          <input className="form-input" placeholder="Email"
            onChange={(e)=>setForm({...form,email:e.target.value})} required />

          <input className="form-input" type="password" placeholder="Password"
            onChange={(e)=>setForm({...form,password:e.target.value})} required />

          <button className="w-full bg-indigo-600 text-white py-2 rounded-md">
            Sign Up
          </button>

          {error && <p className="text-sm text-red-500">{error}</p>}
        </form>

        <p className="text-sm text-gray-500 mt-3">
          Already have an account? <Link className="text-indigo-600" to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
