import AccountCreationForm from '../../components/users/AccountCreationForm'
import styles from '../../styles/CreateProfile.module.css'

const Data = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Create Profile Page</h1>
            <div className={styles.form}>
                <AccountCreationForm />
            </div>
        </div>
    )
}

export default Data