import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { collection, doc, getDocs } from "firebase/firestore";
import { Loading } from "../components";
import { useAuth } from "../contexts/AuthContext.js";
import { firestore } from "../firebase";
import Navbar from "../components/Navbar.js";
import styles from "../styles/Dashboard.module.css";

function Dashboard() {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState([]);
  const { user, loadingAuth } = useAuth(true);

  const navigateToFolder = (id) => {
    navigate(`/folder/${id}`);
  };

  const navigateToSong = (id) => {
    navigate(`/song/${id}`);
  };
  
  useEffect(() => {
    if (loadingAuth) return;
    
    const fetchFolders = async () => {
      if (!user) return;

      const userFoldersCollection = collection(
        doc(firestore, "users", user.uid),
        "folders",
      );
      const foldersSnapshot = await getDocs(userFoldersCollection);
      const foldersList = foldersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      setFolders(foldersList);
    }
    const fetchSongs = async () => {
      if (!user) return;
      
      const userSongsCollection = collection(
        doc(firestore, "users", user.uid),
        "songs",
      );
      const songsSnapshot = await getDocs(userSongsCollection);
      const songsList = songsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log(songsList);
      
      setSongs(songsList);
    };
    
    fetchSongs();
    fetchFolders();

    setLoading(false);
  }, [user, loadingAuth]);
  
  return (
    <>
    {loading ? (
      <Loading />
    ) : (
      <>
      <Navbar />
      <div className={styles.dashboard}>
      <div className={styles.leftColumn}>
      <div className={styles.overview}>
      <div className={styles.ctn}>
      <div className={styles.heading}>
      <h1 style={{ whiteSpace: "pre-wrap" }}>Good morning,{"\n"}Liam Willey!</h1>
      <div className={styles.btnCtn}>
      <button className={styles.btn}>New Song</button>
      <button className={styles.btn}>New Folder</button>
      </div>
      </div>
      </div>
      <div className={styles.ctn}>
      {/* Put share invites here... */}
      </div>
      </div>
      <div className={styles.sectionTwo}>
        <h3 className={styles.sectionHeader}>Folders</h3>
      {folders.map(folder => (
        <div className={styles.folderRow} onClick={() => navigateToFolder(folder.id)}>
          <h2>{folder.title}</h2>
          {/* <p>{folder}</p> */}
        </div>
      ))}
      </div>
      </div>
      <div className={styles.sectionThree}>
        <h3 className={styles.sectionHeader}>Songs</h3>
      {songs.map(song => (
        <div className={styles.songRow} onClick={() => navigateToSong(song.id)}>
          <h2>{song.title}</h2>
          <p>{song.artist}</p>
        </div>
      ))}
      </div>
      </div>
      </>
    )}
    </>
  );
}

export default Dashboard;
