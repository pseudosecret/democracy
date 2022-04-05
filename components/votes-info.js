import React from 'react'
import styles from '../styles/Votes-Info.module.css'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const VotesInfo = () => {
    let { data: rockVotes, error: rockError } = useSWR('/api/getVotes?shape=1', fetcher)
    let { data: paperVotes, error: paperError } = useSWR('/api/getVotes?shape=2', fetcher)
    let { data: scissorsVotes, error: scissorsError } = useSWR('/api/getVotes?shape=3', fetcher)
    
    if(rockError || paperError || scissorsError) {
        return (
            <div className={styles.info}>
                <span className={styles.rock}>Rock: failed</span>
                <span className={styles.paper}>Paper: to</span>
                <span className={styles.scissors}>Scissors: load</span>
            </div>
        )
    }
    if(!rockVotes) {
        rockVotes = 'unknown'
    }
    if(!paperVotes) {
        paperVotes = 'unknown'
    }
    if(!scissorsVotes) {
        scissorsVotes = 'unknown'
    }
    return (
        <div className={styles.info}>
            <span className={styles.rock}>Rock: {Object.keys(rockVotes.result).length}</span>
            <span className={styles.paper}>Paper: {Object.keys(paperVotes.result).length}</span>
            <span className={styles.scissors}>Scissors: {Object.keys(scissorsVotes.result).length}</span>
        </div>
    )
}

export default VotesInfo