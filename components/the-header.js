import BigTitle from './big-title'
import NavBar from './navbar'
import styles from '../styles/The-Header.module.css'

const TheHeader = () => {
    return (
        <header className={styles.container}>
            <BigTitle className={styles.title} />
            <div className={styles.lineBlock}></div>
            <NavBar />
        </header>
    )
}

export default TheHeader