import React from 'react'
import styles from '../styles/VotesInfo.module.css'

class VotesInfo extends React.Component {
    render() {
        if(!this.props.errorMessage) {
            return (
                <div className={styles.info}>    
                    <span className={styles.rock}>Rock: {this.props.rockVotes}</span>
                    <span className={styles.paper}>Paper: {this.props.paperVotes}</span>
                    <span className={styles.scissors}>Scissors: {this.props.scissorsVotes}</span>
                </div>
            )
        } else {
            return (
                <div className={styles.info}>    
                    <span className={styles.rock}><i>Loading...</i></span>
                </div>
            )
        }


    }
}

export default VotesInfo