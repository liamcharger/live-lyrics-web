import React from 'react';
import styles from '../styles/Dashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft, faCommentDots, faEnvelope, faPlayCircle } from '@fortawesome/free-regular-svg-icons'

function Dashboard() {
    return (
        <>
        <div className={styles.mainCtn}>
        <div className={styles.sidebar}>
        <div className={styles.header}>
        <div className="spcr"></div>
        <button>LW</button>
        </div>
        </div>
        <div className={styles.main}>
        <div className={styles.header}>
        <button>
            {/* Replace with chevron */}
            <FontAwesomeIcon icon={faHandPointLeft} />
        </button>
        <div className={styles.infoStack}>
        <div className={styles.subtitle}>Set List: August 13, 2024</div>
        <h3>Song Name</h3>
        </div>
        <div className="spcr"></div>
        <button>
            {/* Replace with chevron */}
            <FontAwesomeIcon icon={faPlayCircle} />
        </button>
        <button>
            {/* Replace with doc */}
            <FontAwesomeIcon icon={faEnvelope} />
        </button>
        <button>
            {/* Replace with textformat icon */}
            <FontAwesomeIcon icon={faEnvelope} />
        </button>
        <button>
            {/* Replace with ellipsis */}
            <FontAwesomeIcon icon={faCommentDots} />
        </button>
        </div>
        </div>
        </div>
        </>
    )
}

export default Dashboard;