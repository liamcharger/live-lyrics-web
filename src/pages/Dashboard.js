import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Loading } from "../components";
import { useAuth } from "../contexts/AuthContext.js";
import { firestore } from "../firebase";
import styles from "../styles/Dashboard.module.css";

function Dashboard() {
  const [songs, setSongs] = useState([]);
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState([]);
  const { user, loadingAuth } = useAuth(true);

  useEffect(() => {
    if (loadingAuth) return;

    const fetchSongs = async () => {
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

      const userSongsCollection = collection(
        doc(firestore, "users", user.uid),
        "songs",
      );
      const songsSnapshot = await getDocs(userSongsCollection);
      const songsList = songsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setSongs(songsList);
      setLoading(false);
    };

    fetchSongs();
  }, [user, loadingAuth]);

  return (
    <>
    {loading ? (
      <Loading />
    ) : (
      <>
        <div className={styles.dashboard}>
          <div className={styles.leftColumn}>
            <div className={styles.overview}>
              <div className={styles.heading}>
                <h1 style={{ whiteSpace: "pre-wrap" }}>Good morning,{"\n"}Liam Willey!</h1>
                <div className={styles.btnCtn}>
                  <button className={styles.btn}>New Song</button>
                  <button className={styles.btn}>New Folder</button>
                  <button className={styles.btn}>Profile</button>
                  <button className={styles.btn}>Settings</button>
                </div>
              </div>
            </div>
            <div className={styles.sectionTwo}>Section Two</div>
          </div>
          <div className={styles.sectionThree}>Section Three</div>
        </div>
      </>
    )}
    </>
  );
}

export default Dashboard;
