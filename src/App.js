import screenshot from './assets/hero-app-preview.png';
import detailImage1 from './assets/detail1.png';
import logoDark from './assets/logo-dark.png';
import Navbar from './components/Navbar.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faAddressBook, faBell, faBookmark, faCalendar, faPaperPlane, faClock, faBarChart, faChessQueen } from '@fortawesome/free-regular-svg-icons'
import { faDiscord, faAppStoreIos } from '@fortawesome/free-brands-svg-icons'
import styles from './styles/App.module.css';
import './styles/Global.css';

function App() {
  return (
    <>
    <Navbar />
    <main>
    <div className={styles.hero}>
    <div className={styles.ctn}>
    <div className={styles.txtCtn}>
    <h1>Live performances.{'\n'}Songwriting.{'\n'}And everything else.</h1>
    </div>
    <div className={styles.subTxt}>
    Effortlessly display lyrics in real-time, customize your setup, manage setlists, and collaborate easily—all with a user-friendly interface for seamless live performances.
    </div>
    <div>
    <div className={styles.btnCtn}>
    <a href="https://apps.apple.com/us/app/lyrics-live/id6449195237">
    <button className={styles.primaryBtn} style={{marginLeft: 0}}>Download for iOS</button>
    </a>
    <a href="/dashboard">
    <button className={styles.secondaryBtn} style={{marginLeft: 0}}>Use on the Web</button>
    </a>
    </div>
    <div className={styles.cpt}>There's not an Android version...yet. We know, not ideal.</div>
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
    <img src={detailImage1} style={{marginRight: "30px"}} alt=""></img>
    </div>
    <div className={styles.altChildCtn}>
    <h2>
    Lorem ipsum
    </h2>
    <p>
    Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis pretium per molestie nisl varius justo tristique. Tristique sociosqu nibh facilisis turpis, est penatibus. Lectus lacus semper mattis netus molestie malesuada est. Nec nibh sit fringilla elit neque commodo eros inceptos. Commodo eget iaculis vehicula accumsan arcu fames elementum congue. Aenean potenti blandit cubilia vulputate enim fames fringilla phasellus.
    </p>
    </div>
    </div>
    {/* TODO: fix text being above image when screen size is smaller and 'flex-direction' is changed to 'column' */}
    <div className={styles.altCtn}>
    <div className={styles.altChildCtn}>
    <h2>
    Lorem ipsum
    </h2>
    <p>
    Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis pretium per molestie nisl varius justo tristique. Tristique sociosqu nibh facilisis turpis, est penatibus. Lectus lacus semper mattis netus molestie malesuada est. Nec nibh sit fringilla elit neque commodo eros inceptos. Commodo eget iaculis vehicula accumsan arcu fames elementum congue. Aenean potenti blandit cubilia vulputate enim fames fringilla phasellus.
    </p>
    </div>
    <div className={styles.altChildCtn}>
    <img src={detailImage1} style={{marginRight: "30px"}} alt=""></img>
    </div>
    </div>
    </div>
    <div className={styles.gridCtn}>
    <div className={styles.header}>
    <h1 className={styles.underline}>Key Features</h1>
    </div>
    <div className={styles.ftGrid}>
    <div class={styles.gridItem}>
    <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
    <div className={styles.vCtn}>
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>
    <div class={styles.gridItem}>
    <FontAwesomeIcon icon={faAddressBook} className={styles.icon} />
    <div className={styles.vCtn}>
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>
    <div class={styles.gridItem}>
    <FontAwesomeIcon icon={faBell} className={styles.icon} />
    <div className={styles.vCtn}>
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>  
    <div class={styles.gridItem}>
    <FontAwesomeIcon icon={faBookmark} className={styles.icon} />
    <div className={styles.vCtn}>
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>
    <div class={styles.gridItem}>
    <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
    <div className={styles.vCtn}>
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>
    <div class={styles.gridItem}>
    <FontAwesomeIcon icon={faClock} className={styles.icon} />
    <div className={styles.vCtn}>
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>  
    <div class={styles.gridItem}>
    <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
    <div className={styles.vCtn}>
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>
    <div class={styles.gridItem}>
    <FontAwesomeIcon icon={faBarChart} className={styles.icon} />
    <div className={styles.vCtn}>
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>
    <div class={styles.gridItem}>
    <FontAwesomeIcon icon={faChessQueen} className={styles.icon} />
    <div className={styles.vCtn}>
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>
    </div>
    </div>
    </main>
    <footer>
    <div className={styles.vCtn}>
    <div className={styles.hCtn}>
    <img src={logoDark} alt="Logo"></img>
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
