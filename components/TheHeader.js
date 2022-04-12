import BigTitle from './BigTitle'
import NavBar from './Navbar'
import styles from '../styles/TheHeader.module.css'

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