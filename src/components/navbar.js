import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <Link className="hover:text-gray-200 transition" to="/">Home</Link>
          <Link className="hover:text-gray-200 transition" to="/create-recipe">Create Recipe</Link>
          <Link className="hover:text-gray-200 transition" to="/saved-recipes">Saved Recipes</Link>
        </div>
        <div>
          {!cookies.access_token ? (
            <Link className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 transition" to="/auth">
              Login/Register
            </Link>
          ) : (
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
