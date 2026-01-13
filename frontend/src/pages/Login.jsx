import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form,setForm] = useState({email:"",password:""});
  const [error,setError] = useState("");

  const submit = async(e)=>{
    e.preventDefault();
    try{
      await login(form.email, form.password);
      navigate("/");
    }catch{
      setError("Invalid email or password");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#F7F8FA]">
      <div className="bg-white border rounded-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Login</h2>

        <form onSubmit={submit} className="space-y-3">
          <input className="form-input" placeholder="Email"
            onChange={(e)=>setForm({...form,email:e.target.value})} required />

          <input className="form-input" placeholder="Password" type="password"
            onChange={(e)=>setForm({...form,password:e.target.value})} required />

          <button className="w-full bg-indigo-600 text-white py-2 rounded-md">
            Sign In
          </button>

          {error && <p className="text-sm text-red-500">{error}</p>}
        </form>

        <p className="text-sm text-gray-500 mt-3">
          No account? <Link className="text-indigo-600" to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
