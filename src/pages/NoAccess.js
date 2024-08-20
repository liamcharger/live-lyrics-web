import styles from '../styles/NoAccess.module.css';

function NoAccess() {
    return (
        <div className={styles.notFoundCtn}>
        <div className={styles.txtCtn}>
        <h1>Oops, you can't access this page</h1>
        <div className={styles.cpt}>
        This part of the site is still under development. Try again later!
        </div>
        </div>
        </div>
    )
}

export default NoAccess;