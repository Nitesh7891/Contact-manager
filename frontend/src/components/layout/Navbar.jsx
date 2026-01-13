import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-6">
      
      {/* 3D Title */}
      <h1 className="text-xl font-bold text-indigo-600 logo-3d">
        Contacts Manager
      </h1>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="px-4 py-1.5 rounded-md bg-red-500 text-white text-sm font-medium
                   hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </header>
  );
}
