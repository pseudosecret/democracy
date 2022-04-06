import React from 'react'
import styles from '../styles/Votes-Info.module.css'

class VotesInfo extends React.Component {
    render() {
        return (
            <div className={styles.info}>
                <span className={styles.rock}>Rock: {this.props.rockVotes}</span>
                <span className={styles.paper}>Paper: {this.props.paperVotes}</span>
                <span className={styles.scissors}>Scissors: {this.props.scissorsVotes}</span>
            </div>
        )
    }
}

export default VotesInfo