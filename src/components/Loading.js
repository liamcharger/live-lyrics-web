import styles from '../styles/Loading.module.css';

function Loading() {
    return (
        <div className={styles.loadingCtn}>
        <div className={styles.txtCtn}>
        <h2>Loading</h2>
        <div className={styles.cpt}>
        Hang in there...
        </div>
        </div>
        </div>
    )
}

export default Loading;