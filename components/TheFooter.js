import styles from '../styles/TheFooter.module.css'
import Link from 'next/link'

const TheFooter = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.lineBlock} />
            <p>
                <span className={styles.copyright}>&copy;</span>
                <span className={styles.industries}>Wilbur Industries, 2022</span>
            </p>
            <p>
                <span className={styles.promo}>For more projects by us, check <Link href="https://www.wilburindustries.com/"><a>here</a></Link>
                .</span>
            </p>
        </footer>
    )
}

export default TheFooter