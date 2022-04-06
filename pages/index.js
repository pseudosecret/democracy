import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TeamPointDisplay from '../components/team-points-display'
import VotesChart from '../components/votes-chart'
import VotesInfo from '../components/votes-info'
import Voting from '../components/voting'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Index = () => {
  let numRockVotes = 0
  let numPaperVotes = 0
  let numScissorsVotes = 0

  let { data: rockVotes, error: rockError } = useSWR('/api/getVotes?shape=1', fetcher)
  let { data: paperVotes, error: paperError } = useSWR('/api/getVotes?shape=2', fetcher)
  let { data: scissorsVotes, error: scissorsError } = useSWR('/api/getVotes?shape=3', fetcher)
  
  if(rockError || paperError || scissorsError) {
      return (
          <div>
              {rockError}
              {paperError}
              {scissorsError}
          </div>
      )
  }

  if(!rockVotes) {
    rockVotes = 'unknown'
  } else {
    numRockVotes = Object.keys(rockVotes.result).length
  }
  if(!paperVotes) {
    paperVotes = 'unknown'
  } else {
  numPaperVotes = Object.keys(paperVotes.result).length
  }
  if(!scissorsVotes) {
    scissorsVotes = 'unknown'
  } else {
    numScissorsVotes = Object.keys(scissorsVotes.result).length
  }

  return (
    <div>
      <Head>
        <title>Democracy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.charts}>
          <TeamPointDisplay 
            teamName={"Team 1"}
            teamPoints={62}
            backgroundColor={"#FFB56B"}
            borderColor={"#CB410B"}
          />
          <VotesChart 
            rockVotes={numRockVotes}
            paperVotes={numPaperVotes}
            scissorsVotes={numScissorsVotes}
          />
          <TeamPointDisplay 
            teamName={"Team 2"}
            teamPoints={36}
            backgroundColor={"#7B68EE"}
            borderColor={"#4B0082"}
          />
        </div>
        <div>
          <VotesInfo 
            rockVotes = {numRockVotes}
            paperVotes = {numPaperVotes}
            scissorsVotes = {numScissorsVotes}
          />
        </div>
        <div>
          <Voting />
        </div>
      </main>
    </div>
  )
}




export default Index