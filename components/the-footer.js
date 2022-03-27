import '../styles/The-Footer.module.css'
import Link from 'next/link'

const TheFooter = () => {
    return (
        <footer>
            <p>
                &copy; Wilbur Industries, 2022
            </p>
            <p>
                For more projects by us, check <Link href="https://pseudosecret.github.io/wilburindustries/"><a>here</a></Link>
                .
            </p>
        </footer>
    )
}

export default TheFooter