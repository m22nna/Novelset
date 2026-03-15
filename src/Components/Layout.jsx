import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { supabase } from "../../supabaseClient.js";

export default function Layout() {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("user") === "true"
  );
  
  // State for cached books
  const [books, setBooks] = useState([]);
  const [isLoadingBooks, setIsLoadingBooks] = useState(false);
  const [search, setSearch] = useState("");
  
  // State to track which favorite books have been hidden from the UI
  // Initialize from localStorage if available
  const [hiddenFavorites, setHiddenFavorites] = useState(() => {
    const saved = localStorage.getItem("hiddenFavorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLogged(user === "true");
  }, []);

  // Save hiddenFavorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("hiddenFavorites", JSON.stringify(hiddenFavorites));
  }, [hiddenFavorites]);

  const handleLogin = () => {
    localStorage.setItem("user", "true");
    setIsLogged(true);
  };
const navigate = useNavigate();
  const handleLogout = async() => {
    await supabase.auth.signOut();
    localStorage.removeItem("user");
    setIsLogged(false);
    navigate("/login")
  };

  return (
    <>
      <Navbar isLogged={isLogged} handleLogout={handleLogout} />
      <Outlet context={{ 
        isLogged, handleLogin, 
        hiddenFavorites, setHiddenFavorites,
        books, setBooks,
        isLoadingBooks, setIsLoadingBooks,
        search, setSearch
      }} />
      <Footer />
    </>
  );
}