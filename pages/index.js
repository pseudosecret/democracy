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
  let { data, error } = useSWR('/api/getVotes', fetcher)
  
  if(error) {
      return (
          <div>
              Error: {error}
          </div>
      )
  }

  if(!data) {
    return <div>Loading...</div>
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
            rockVotes={data.votes.rock}
            paperVotes={data.votes.paper}
            scissorsVotes={data.votes.scissors}
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
            rockVotes = {data.votes.rock}
            paperVotes = {data.votes.paper}
            scissorsVotes = {data.votes.scissors}
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