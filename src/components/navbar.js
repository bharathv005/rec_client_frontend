import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FaHome, FaPlus, FaBookmark, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import "./Navbar.css"; // Import external CSS for styling

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">RecipeApp</Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-item">
            <FaHome /> Home
          </Link>
          <Link to="/create-recipe" className="nav-item">
            <FaPlus /> Create Recipe
          </Link>
          <Link to="/saved-recipes" className="nav-item">
            <FaBookmark /> Saved Recipes
          </Link>

          {!cookies.access_token ? (
            <Link to="/auth" className="nav-item login-btn">
              <FaSignInAlt /> Login/Register
            </Link>
          ) : (
            <button className="logout-btn" onClick={logout}>
              <FaSignOutAlt /> Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
