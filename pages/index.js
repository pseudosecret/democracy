import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TeamPointDisplay from '../components/team-points-display'
import VotesChart from '../components/votes-chart'
import VotesInfo from '../components/votes-info'
import Voting from '../components/voting'

const Index = () => {
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
            rockVotes={52}
            paperVotes={11}
            scissorsVotes={26}
          />
          <TeamPointDisplay 
            teamName={"Team 2"}
            teamPoints={36}
            backgroundColor={"#7B68EE"}
            borderColor={"#4B0082"}
          />
        </div>
        <div>
          <VotesInfo />
        </div>
        <div>
          <Voting />
        </div>
      </main>
    </div>
  )
}




export default Index