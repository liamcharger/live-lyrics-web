import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext.js';
import { collection, getDocs, doc } from 'firebase/firestore';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderClosed, faFolderPlus, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Dashboard.module.css';

function Dashboard() {
    const [songs, setSongs] = useState([]);
    const [folders, setFolders] = useState([]);
    const { user, loading } = useAuth();
    const localSongs = ["", "", "", "", "", "", "", ""];
    
    useEffect(() => {
        if (loading) return;
        
        const fetchSongs = async () => {
            if (!user) return;
            
            const userFoldersCollection = collection(doc(firestore, 'users', user.uid), 'folders');
            const foldersSnapshot = await getDocs(userFoldersCollection);
            const foldersList = foldersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setFolders(foldersList);
            
            const userSongsCollection = collection(doc(firestore, 'users', user.uid), 'songs');
            const songsSnapshot = await getDocs(userSongsCollection);
            const songsList = songsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setSongs(songsList);
            
            setFolders(localSongs);
            setSongs(localSongs);
        };
        
        fetchSongs();
    }, [user, loading]);
    
    return (
        <div className={styles.main}>
        <div className={styles.header}>
        <h3>Home</h3>
        <div className="spcr"></div>
        <button>LW</button>
        </div>
        <div className={styles.content}>
        {(loading ? 
            <Loading /> : 
            <>
            <div className={styles.grid}>
            <div className={styles.newContentRowItem}>
            <div className={styles.folderHCtn}>
            <div className="spcr"></div>
            <FontAwesomeIcon icon={faFolderPlus} style={{ marginRight: "6px", fontSize: "14pt" }}/>
            <h4>New Folder</h4>
            <div className="spcr"></div>
            </div>
            </div>
            {folders.map(folder => (
                <Link to={`/folder/${folder.id}`} key={folder.id} className={styles.rowLink}>
                <div className={styles.rowItem}>
                <div className={styles.folderHCtn}>
                <FontAwesomeIcon icon={faFolderClosed} />
                <div className="spcr"></div>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "gray"}}/>
                </div>
                <h3>Folder Title</h3>
                <div className={styles.subtitle}>
                Date
                </div>
                </div>
                </Link>
            ))}
            </div>
            <div className={styles.grid}>
            <div className={styles.newContentRowItem}>
            <div className={styles.folderHCtn}>
            <div className="spcr"></div>
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "6px", fontSize: "14pt" }}/>
            <h4>New Song</h4>
            <div className="spcr"></div>
            </div>
            </div>
            {songs.map(song => (
                <Link to={`/song/${song.id}`} key={song.id} className={styles.rowLink}>
                <div className={styles.rowItem}>
                <div className={styles.songHCtn}>
                <h3>Song Title</h3>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "gray"}}/>
                </div>
                <div className={styles.subtitle}>
                Artist Name
                </div>
                </div>
                </Link>
            ))}
            </div>
            </>)}
            </div>
            </div>
        );
    }
    
    export default Dashboard;