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
  let { data, error } = useSWR('/api/getVotes', fetcher, { refreshInterval: 1000 })
  
  if(error) {
      return (
          <div>
              Error: {error}
          </div>
      )
  }

  if(!data) {
    return (
      <div>
        <Head>
          <title>Democracy</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className={styles.charts}>
            <TeamPointDisplay 
              teamName={"Loading..."}
              teamPoints={62}
              backgroundColor={"#FFB56B"}
              borderColor={"#CB410B"}
            />
            <VotesChart 
              rockVotes={0}
              paperVotes={0}
              scissorsVotes={0}
            />
            <TeamPointDisplay 
              teamName={"Loading..."}
              teamPoints={36}
              backgroundColor={"#7B68EE"}
              borderColor={"#4B0082"}
            />
          </div>
          <div>
            <VotesInfo 
              rockVotes={0}
              paperVotes={0}
              scissorsVotes={0}
              errorMessage={'Loading...'}
            />
          </div>
          <div>
            <Voting />
          </div>
        </main>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>Democracy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
        <div className={styles.charts}>
          <div className={styles.teamChart}>
            <TeamPointDisplay 
              teamName={"The Secret Geese"}
              teamPoints={62}
              backgroundColor={"#FFB56B"}
              borderColor={"#CB410B"}
            />
            <span className={styles.teamChartOneName}>The Secret Geese</span>
          </div>
          <div className={styles.doughnutChart}>
          <VotesChart 
            rockVotes={data.votes.rock}
            paperVotes={data.votes.paper}
            scissorsVotes={data.votes.scissors}
          />
          </div>
          <div className={styles.teamChart}>
            <div className={styles.teamChartWidth}></div>
            <TeamPointDisplay 
              teamName={"The Sinister Scientists"}
              teamPoints={36}
              backgroundColor={"#7B68EE"}
              borderColor={"#4B0082"}
            />
            <span className={styles.teamChartTwoName}>The Secret Geese</span>
          </div>
          </div>
          <div>
            <VotesInfo 
              rockVotes = {data.votes.rock}
              paperVotes = {data.votes.paper}
              scissorsVotes = {data.votes.scissors}
            />
          </div>
        </div>

        <div>
          <Voting />
        </div>
      </main>
    </div>
  )
}

export default Index