import styles from '../styles/404.module.css';

function NotFound() {
    return (
        <div className={styles.notFoundCtn}>
        <div className={styles.txtCtn}>
        <h1>404 - That's an error</h1>
        <div className={styles.cpt}>
        We couldn't find the requested resource. Make sure the URL is correct and that you have permission to access it.
        </div>
        </div>
        </div>
    )
}

export default NotFound;