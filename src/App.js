import screenshot from "./assets/hero-app-preview.png";
import detailImage1 from "./assets/detail1.png";
import logo from "./assets/logo-dark.png";
import Navbar from "./components/Navbar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faBell,
  faBookmark,
  faCalendar,
  faPaperPlane,
  faClock
} from "@fortawesome/free-regular-svg-icons";
import { faDiscord, faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import styles from "./styles/App.module.css";

function App() {
  return (
    <>
      <Navbar />
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
                <a href="/dashboard">
                  <button
                    className={styles.secondaryBtn}
                    style={{ marginLeft: 0 }}
                  >
                    Use on the Web
                  </button>
                </a>
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
                src={detailImage1}
                style={{ marginRight: "30px" }}
                alt=""
              ></img>
            </div>
            <div className={styles.altChildCtn}>
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis
                pretium per molestie nisl varius justo tristique. Tristique
                sociosqu nibh facilisis turpis, est penatibus. Lectus lacus
                semper mattis netus molestie malesuada est. Nec nibh sit
                fringilla elit neque commodo eros inceptos. Commodo eget iaculis
                vehicula accumsan arcu fames elementum congue. Aenean potenti
                blandit cubilia vulputate enim fames fringilla phasellus.
              </p>
            </div>
          </div>
          {/* TODO: fix text being above image when screen size is smaller and 'flex-direction' is changed to 'column' */}
          <div className={styles.altCtn}>
            <div className={styles.altChildCtn}>
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis
                pretium per molestie nisl varius justo tristique. Tristique
                sociosqu nibh facilisis turpis, est penatibus. Lectus lacus
                semper mattis netus molestie malesuada est. Nec nibh sit
                fringilla elit neque commodo eros inceptos. Commodo eget iaculis
                vehicula accumsan arcu fames elementum congue. Aenean potenti
                blandit cubilia vulputate enim fames fringilla phasellus.
              </p>
            </div>
            <div className={styles.altChildCtn}>
              <img
                src={detailImage1}
                style={{ marginRight: "30px" }}
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div className={styles.gridCtn}>
          <div className={styles.header}>
            <h1 className={styles.underline}>Key Features</h1>
          </div>
          <div className={styles.ftGrid}>
            <div className={styles.gridItem}>
              <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
              <div className={styles.vCtn}>
                <h2>Beautiful design</h2>
                <p>
                  Our app features an intuitive interface, tailored for musicians.
                </p>
              </div>
            </div>
            {/* <div className={styles.gridItem}>
              <FontAwesomeIcon icon={faAddressBook} className={styles.icon} />
              <div className={styles.vCtn}>
                <h2>Customized experience</h2>
                <p>
                Personalize your lyrics display to match your preferences and stage conditions.
                </p>
              </div>
            </div> */}
            <div className={styles.gridItem}>
              <FontAwesomeIcon icon={faBell} className={styles.icon} />
              <div className={styles.vCtn}>
                <h2>Organizations with set lists</h2>
                <p>
                Efficiently create and manage setlists to seamlessly organize your performance.
                </p>
              </div>
            </div>
            <div className={styles.gridItem}>
              <FontAwesomeIcon icon={faBookmark} className={styles.icon} />
              <div className={styles.vCtn}>
                <h2>Play View</h2>
                <p>
                  View your lyrics in a distraction free way that includes autoscroll and a metronome. 
                </p>
              </div>
            </div>
            <div className={styles.gridItem}>
              <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
              <div className={styles.vCtn}>
                <h2>Notes</h2>
                <p>
                Keep track of important notes for each song, ensuring you never miss a beat during rehearsals or performances.
                </p>
              </div>
            </div>
            <div className={styles.gridItem}>
              <FontAwesomeIcon icon={faClock} className={styles.icon} />
              <div className={styles.vCtn}>
                <h2>Collaboration</h2>
                <p>
                Easily collaborate on songs and folders with friends and band members.
                </p>
              </div>
            </div>
            <div className={styles.gridItem}>
              <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
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
