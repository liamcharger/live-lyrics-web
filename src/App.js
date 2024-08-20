import screenshot from "./assets/hero-app-preview.png";
import section1 from "./assets/section1.jpg";
import section2 from "./assets/section2.jpg";
import logo from "./assets/logo-dark.png";
// import Navbar from "./components/Navbar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPlay,
  faNoteSticky,
  faUserGroup,
  faCopy,
  faPaintBrush,
  faList
} from "@fortawesome/free-solid-svg-icons"
import { faDiscord, faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import styles from "./styles/App.module.css";

function App() {
  return (
    <>
    {/* Remove Navbar until Dashboard development is finished */}
    {/* <Navbar /> */}
    <main className={styles.main}>
    <div className={styles.hero}>
    <div className={styles.ctn}>
    <div className={styles.txtCtn}>
    <h1>
    Live performances.{"\n"}Songwriting.{"\n"}And everything else.
    </h1>
    </div>
    <div className={styles.subTxt}>
    Effortlessly display lyrics in real-time, customize your setup,
    manage setlists, and collaborate easily—all with a user-friendly
    interface for seamless live performances.
    </div>
    <div>
    <div className={styles.btnCtn}>
    <a href="https://apps.apple.com/us/app/lyrics-live/id6449195237">
    <button
    className={styles.primaryBtn}
    style={{ marginLeft: 0 }}
    >
    Download for iOS
    </button>
    </a>
    {/* Disabled use on web button until finished development */}
    {/* <a href="/dashboard">
      <button
      className={styles.secondaryBtn}
      style={{ marginLeft: 0 }}
      >
      Use on the Web
      </button>
      </a> */}
      </div>
      <div className={styles.cpt}>
      There's not an Android version...yet. We know, not ideal.
      </div>
      </div>
      </div>
      <div className={styles.ctn}>
      {/* TODO: fix text being above image when screen size is smaller and 'flex-direction' is changed to 'column' */}
      <img src={screenshot} alt="App Preview"></img>
      </div>
      </div>
      <div className={styles.sct}>
      <div className={styles.altCtn}>
      <div className={styles.altChildCtn}>
      <img
      src={section1}
      style={{ marginRight: "30px" }}
      alt=""
      />
      </div>
      <div className={styles.altChildCtn}>
      <h2>Essential for Performers</h2>
      <p>
      Live Lyrics is designed to elevate your live performances with a suite of essential tools. From real-time lyric displays to seamless setlist management, our app ensures you stay focused on your artistry. Personalize your display, manage variations of your songs, and collaborate effortlessly with band members—all within an intuitive interface tailored for musicians. Whether you're on stage or in rehearsal, Live Lyrics provides the flexibility and functionality you need to deliver your best performance.
      </p>
      </div>
      </div>
      {/* TODO: fix text being above image when screen size is smaller and 'flex-direction' is changed to 'column' */}
      <div className={styles.altCtn}>
      <div className={styles.altChildCtn}>
      <h2>Seamless Experience</h2>
      <p>
      The user experience is at the heart of Live Lyrics. With a clean, intuitive design, the app makes it easy to navigate through your setlists and customize your lyric displays. Whether you're adjusting font sizes for better visibility or organizing your songs into folders for quick access, every feature is crafted to enhance your workflow. The dedicated "Play View" immerses you in your performance, minimizing distractions and keeping you connected with your audience.
      </p>
      </div>
      <div className={styles.altChildCtn}>
      <img
      src={section2}
      style={{ marginRight: "30px" }}
      alt=""
      />
      </div>
      </div>
      </div>
      <div className={styles.gridCtn}>
      <div className={styles.header}>
      <h1 className={styles.underline}>Key Features</h1>
      </div>
      <div className={styles.ftGrid}>
      <div className={styles.gridItem}>
      <FontAwesomeIcon icon={faEye} className={styles.icon} />
      <div className={styles.vCtn}>
      <h2>Beautiful design</h2>
      <p>
      Our app features an intuitive interface, tailored for musicians.
      </p>
      </div>
      </div>
      <div className={styles.gridItem}>
      <FontAwesomeIcon icon={faPaintBrush} className={styles.icon} />
      <div className={styles.vCtn}>
      <h2>Customized experience</h2>
      <p>
      Personalize your lyrics display to match your preferences and stage conditions.
      </p>
      </div>
      </div>
      <div className={styles.gridItem}>
      <FontAwesomeIcon icon={faList} className={styles.icon} />
      <div className={styles.vCtn}>
      <h2>Organizations with set lists</h2>
      <p>
      Efficiently create and manage setlists to seamlessly organize your performance.
      </p>
      </div>
      </div>
      <div className={styles.gridItem}>
      <FontAwesomeIcon icon={faPlay} className={styles.icon} />
      <div className={styles.vCtn}>
      <h2>Play View</h2>
      <p>
      View your lyrics in a distraction free way that includes autoscroll and a metronome. 
      </p>
      </div>
      </div>
      <div className={styles.gridItem}>
      <FontAwesomeIcon icon={faNoteSticky} className={styles.icon} />
      <div className={styles.vCtn}>
      <h2>Notes</h2>
      <p>
      Keep track of important notes for each song, ensuring you never miss a beat during rehearsals or performances.
      </p>
      </div>
      </div>
      <div className={styles.gridItem}>
      <FontAwesomeIcon icon={faUserGroup} className={styles.icon} />
      <div className={styles.vCtn}>
      <h2>Collaboration</h2>
      <p>
      Easily collaborate on songs and folders with friends and band members.
      </p>
      </div>
      </div>
      <div className={styles.gridItem}>
      <FontAwesomeIcon icon={faCopy} className={styles.icon} />
      <div className={styles.vCtn}>
      <h2>Song variations</h2>
      <p>
      Keep versions of your song organized by creating variations for guitar chords, vocal parts, and more.
      </p>
      </div>
      </div>
      </div>
      </div>
      </main>
      <footer>
      <div className={styles.vCtn}>
      <div className={styles.hCtn}>
      <img src={logo} alt="Logo"></img>
      <h2>Live Lyrics</h2>
      <div className="spcr"></div>
      <a href="https://apps.apple.com/us/app/lyrics-live/id6449195237">
      <button className={styles.btnBrand}>
      <FontAwesomeIcon icon={faAppStoreIos} size="2x" />
      </button>
      </a>
      <a href="https://apps.apple.com/us/app/lyrics-live/id6449195237">
      <button className={styles.btnBrand}>
      <FontAwesomeIcon icon={faDiscord} size="2x" />
      </button>
      </a>
      </div>
      <div className={styles.hCtn}>
      <div className="spcr"></div>
      <p className={styles.copyright}>Copyright © 2024 by Liam Willey</p>
      <div className="spcr"></div>
      </div>
      </div>
      </footer>
      </>
    );
  }
  
  export default App;
  