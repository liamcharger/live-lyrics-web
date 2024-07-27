import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { Loading } from '../components';
import { NotFound } from '../pages';
import styles from '../styles/SongDetail.module.css';

function SongDetail() {
    const { id } = useParams();
    const { user } = useAuth();
    const [song, setSong] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSong = async () => {
            if (!user.uid) return;

            try {
                const songDoc = doc(firestore, 'users', user.uid, 'songs', id);
                const songSnapshot = await getDoc(songDoc);
                if (songSnapshot.exists()) {
                    setSong(songSnapshot.data());
                } else {
                    console.log('No such song!');
                }
            } catch (error) {
                console.error('Error fetching song:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSong();
    }, [id, user.uid]);

    if (loading) {
        return <Loading />;
    }

    if (!song) {
        return <NotFound />;
    }

    return (
        <div className={styles.songDetail}>
            <h1>{song.title}</h1>
            <p>{song.artist}</p>
            <p>{song.lyrics}</p>
            {/* Add more song details here */}
        </div>
    );
}

export default SongDetail;