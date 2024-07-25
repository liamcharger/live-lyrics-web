import screenshot from './assets/hero-app-preview.png';
import detailImage1 from './assets/detail1.png';
import logoDark from './assets/logo-dark.png';
import underline from './assets/underline.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faAddressBook, faBell, faBookmark, faCalendar, faPaperPlane, faClock, faBarChart, faChessQueen } from '@fortawesome/free-regular-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <header className="navbar">
    <h3>Live Lyrics</h3>
    <div className="spcr"></div>
    <Link to="/login">
    <button className="primary-btn">Log In</button>
    </Link>
    <button className="secondary-btn">Sign Up</button>
    </header>
    <main>
    <div className="hero">
    <div className="ctn">
    <div className="txt-ctn">
    <h1>Live performances.{'\n'}Songwriting.{'\n'}And everything else.</h1>
    </div>
    <div className="sub-txt">
    Effortlessly display lyrics in real-time, customize your setup, manage setlists, and collaborate easily—all with a user-friendly interface for seamless live performances.
    </div>
    <div>
    <div className="btn-ctn">
    <a href="https://apps.apple.com/us/app/lyrics-live/id6449195237">
    <button className="primary-btn" style={{marginLeft: 0}}>Download for iOS</button>
    </a>
    <a href="/dashboard">
    <button className="secondary-btn" style={{marginLeft: 0}}>Use on the Web</button>
    </a>
    </div>
    <div className="cpt">There's not an Android version...yet. We know, not ideal.</div>
    </div>
    </div>
    <div className="ctn">
    {/* TODO: fix text being above image when screen size is smaller and 'flex-direction' is changed to 'column' */}
    <img src={screenshot} alt="App Preview"></img>
    </div>
    </div>
    <div className="sct">
    <div className="alt-ctn">
    <div className="alt-child-ctn">
    <img src={detailImage1} style={{marginRight: "30px"}} alt=""></img>
    </div>
    <div className="alt-child-ctn">
    <h2>
    Sweet and Simple.
    </h2>
    <p>
    Live Lyrics boasts a user-friendly interface, tailored for musicians, its simple nature promoting creativty without all the distractions (rewrite in future.) Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis pretium per molestie nisl varius justo tristique. Tristique sociosqu nibh facilisis turpis, est penatibus. Lectus lacus semper mattis netus molestie malesuada est.
    </p>
    </div>
    </div>
    {/* TODO: fix text being above image when screen size is smaller and 'flex-direction' is changed to 'column' */}
    <div className="alt-ctn">
    <div className="alt-child-ctn">
    <h2>
    Lorem ipsum
    </h2>
    <p>
    Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis pretium per molestie nisl varius justo tristique. Tristique sociosqu nibh facilisis turpis, est penatibus. Lectus lacus semper mattis netus molestie malesuada est. Nec nibh sit fringilla elit neque commodo eros inceptos. Commodo eget iaculis vehicula accumsan arcu fames elementum congue. Aenean potenti blandit cubilia vulputate enim fames fringilla phasellus.
    </p>
    </div>
    <div className="alt-child-ctn">
    <img src={detailImage1} style={{marginRight: "30px"}} alt=""></img>
    </div>
    </div>
    </div>
    <div className="grid-ctn">
    <div className="header">
    <h1>Key Features</h1>
    <img src={underline} style={{width: "220px"}} alt=""></img>
    </div>
    <div className="ft-grid">
    <div class="grid-item">
    <FontAwesomeIcon icon={faCircleCheck} size="2x" />
    <div className="v-ctn">
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>
    <div class="grid-item">
    <FontAwesomeIcon icon={faAddressBook} size="2x" />
    <div className="v-ctn">
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>
    <div class="grid-item">
    <FontAwesomeIcon icon={faBell} size="2x" />
    <div className="v-ctn">
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>  
    <div class="grid-item">
    <FontAwesomeIcon icon={faBookmark} size="2x" />
    <div className="v-ctn">
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>
    <div class="grid-item">
    <FontAwesomeIcon icon={faCalendar} size="2x" />
    <div className="v-ctn">
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>
    <div class="grid-item">
    <FontAwesomeIcon icon={faClock} size="2x" />
    <div className="v-ctn">
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>  
    <div class="grid-item">
    <FontAwesomeIcon icon={faPaperPlane} size="2x" />
    <div className="v-ctn">
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>
    <div class="grid-item">
    <FontAwesomeIcon icon={faBarChart} size="2x" />
    <div className="v-ctn">
    <h2>Short Description</h2>
    <p>
    Feature description goes here...Feature description goes here...Feature description goes here...
    </p>
    </div>
    </div>
    <div class="grid-item">
    <FontAwesomeIcon icon={faChessQueen} size="2x" />
    <div className="v-ctn">
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
    <div className="v-ctn">
    <div className="h-ctn">
    <img src={logoDark} alt="Logo"></img>
    <h2>Live Lyrics</h2>
    <div className="spcr"></div>
    <button className="btn-brand">
    <FontAwesomeIcon icon={faDiscord} size="2x" />
    </button>
    </div>
    <div className="h-ctn">
    <div className="spcr"></div>
    <p className="copyright">Copyright © 2024 by Liam Willey</p>
    <div className="spcr"></div>
    </div>
    </div>
    </footer>
    </>
  );
}

export default App;
