import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import styles from '../styles/Login.module.css';
import detailImage from '../assets/hero-app-preview.png';
import '../styles/Global.css';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate(from, { replace: true });
        } catch (error) {
            console.error("Error signing in", error);
        }
    };
    
    return (
        <>
        <div className={styles.loginCtn}>
        <div className={styles.leftCtn}>
        <div className={styles.formCtn}>
        <h1>Good morning!{'\n'}Welcome back to Live Lyrics!</h1>
        <div className={styles.subtitle}>Use your email and password to sign in below:</div>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
        <div className={styles.hCtn}>
        <div className="spcr"></div>
        <button className={styles.noStyleBtn}>
        Forgot Password?
        </button>
        </div>
        <button onClick={handleLogin}>Sign In</button>
        </div>
        </div>
        <div className={styles.rightCtn}>
        <img src={detailImage} alt=""></img>
        </div>
        </div>
        </>
    )
}

export default Login;