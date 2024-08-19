import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "../styles/Navbar.module.css";

export const signOutUser = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    console.log("User signed out successfully.");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

function Navbar() {
  const { user } = useAuth();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setIsVisible(true); // Always show navbar when scrolled to the top
      } else if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else if (window.scrollY < lastScrollY) {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  
  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}>
    <h3>Live Lyrics</h3>
    <div className="spcr"></div>
    {user ? (
      <>
      <Link to="/dashboard">
      <button className={styles.primaryBtn}>Open Dashboard</button>
      </Link>
      <button className={styles.secondaryBtn} onClick={signOutUser}>
      Log Out
      </button>
      </>
    ) : (
      <>
      <Link to="/login">
      <button className={styles.primaryBtn}>Log In</button>
      </Link>
      <button className={styles.secondaryBtn}>Sign Up</button>
      </>
    )}
    </nav>
  );
}

export default Navbar;
