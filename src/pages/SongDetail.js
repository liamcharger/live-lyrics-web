import styles from "../styles/SongDetail.module.css";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Loading } from "../components";
import { useAuth } from "../contexts/AuthContext";
import { firestore } from "../firebase";
import { NotFound } from "../pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import {
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons"

function SongDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchSong = async () => {
      if (!user.uid) return;
      
      try {
        const songDoc = doc(firestore, "users", user.uid, "songs", id);
        const songSnapshot = await getDoc(songDoc);
        if (songSnapshot.exists()) {
          setSong(songSnapshot.data());
        } else {
          console.log("No such song!");
        }
      } catch (error) {
        console.error("Error fetching song:", error);
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
    <div className={styles.mainCtn}>
    <div className={styles.header}>
    <button onClick={() => navigate(-1)}><FontAwesomeIcon icon={faChevronLeft} /></button>
    <h1>{song.title}</h1>
    </div>
    <div className={styles.content}>
    <div className={styles.songCnt}>
    <p style={{whiteSpace: "pre-wrap"}}>{song.lyrics}</p>
    </div>
    </div>
    </div>
  );
}

export default SongDetail;
