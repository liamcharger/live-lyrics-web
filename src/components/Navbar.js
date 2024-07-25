import '../styles/Global.css';
import styles from '../styles/Navbar.module.css';
import { useAuth } from '../contexts/AuthContext';
import { Link } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';

export const signOutUser = async () => {
    const auth = getAuth();
    try {
        await signOut(auth);
        console.log('User signed out successfully.');
    } catch (error) {
        console.error('Error signing out:', error);
    }
};

function Navbar() {
    const { user } = useAuth();
    
    return (
        <header className={styles.navbar}>
        <h3>Live Lyrics</h3>
        <div className="spcr"></div>
        {user ? (
            <>
            <Link to="/dashboard">
            <button className={styles.primaryBtn}>Open Dashboard</button>
            </Link>
            <button className={styles.secondaryBtn} onClick={signOutUser}>Log Out</button>
            </>
        ) : (
            <>
            <Link to="/login">
            <button className={styles.primaryBtn}>Log In</button>
            </Link>
            <button className={styles.secondaryBtn}>Sign Up</button>
            </>
        )}
        </header>
    )
}

export default Navbar;