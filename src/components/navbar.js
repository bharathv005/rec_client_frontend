import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FaHome, FaPlus, FaBookmark, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  const navbarStyle = {
    width: "100%",
    height: "80px",
    background: "linear-gradient(135deg, #007bff, #0056b3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1000",
  };

  const containerStyle = {
    width: "90%",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    transition: "0.3s ease-in-out",
    padding: "8px 12px",
    borderRadius: "6px",
  };

  const loginStyle = {
    ...linkStyle,
    background: "rgba(255, 255, 255, 0.3)",
  };

  const buttonStyle = {
    background: "#ff4d4d",
    border: "none",
    color: "white",
    padding: "8px 12px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    borderRadius: "6px",
    transition: "0.3s",
  };

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <Link to="/" style={{ ...linkStyle, fontSize: "24px", fontWeight: "bold" }}>
          RecipeApp
        </Link>

        <div style={linkContainerStyle}>
          <Link to="/" style={linkStyle}>
            <FaHome /> Home
          </Link>
          <Link to="/create-recipe" style={linkStyle}>
            <FaPlus /> Create Recipe
          </Link>
          <Link to="/saved-recipes" style={linkStyle}>
            <FaBookmark /> Saved Recipes
          </Link>

          {!cookies.access_token ? (
            <Link to="/auth" style={loginStyle}>
              <FaSignInAlt /> Login/Register
            </Link>
          ) : (
            <button style={buttonStyle} onClick={logout}>
              <FaSignOutAlt /> Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
