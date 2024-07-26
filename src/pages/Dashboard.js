import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext.js';
import { collection, getDocs, doc } from 'firebase/firestore';
import { firestore } from '../firebase';
import styles from '../styles/Dashboard.module.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [songs, setSongs] = useState([]);
    const { user, loading } = useAuth();

    useEffect(() => {
        if (loading) return;

        const fetchSongs = async () => {
            if (!user) return;

            const userSongsCollection = collection(doc(firestore, 'users', user.uid), 'songs');
            const songsSnapshot = await getDocs(userSongsCollection);
            const songsList = songsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setSongs(songsList);
        };

        fetchSongs();
    }, [user, loading]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className={styles.main}>
            <div className={styles.header}>
            <h3>Live Lyrics</h3>
                <div className="spcr"></div>
                <button>LW</button>
            </div>
            <div className={styles.content}>
                <div className={styles.songGrid}>
                    {songs.map(song => (
                        <Link to={`/song/${song.id}`} key={song.id} className={styles.songLink}>
                            <div className={styles.songItem}>
                                <h3>{song.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;