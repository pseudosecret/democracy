import { Breadcrumbs } from '@mui/material'
import Link from '@mui/material/Link'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.container}>
            <Breadcrumbs separator='|' aria-label='breadcrumb'>
                <Link href='/'>
                    Home
                </Link>
                <Link>
                    Profile
                </Link>
                <Link href='/data'>
                    Data
                </Link>
                <Link href='faq'>
                    FAQ
                </Link>
                <Link href='about'>
                    About
                </Link>
            </Breadcrumbs>
        </div>
    )
}

export default NavBar