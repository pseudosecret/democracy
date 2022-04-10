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
  let { data: votesData, error: votesError } = useSWR('/api/getVotes', fetcher, { refreshInterval: 3500 })
  let { data: teamsData, error: teamsError } = useSWR('/api/getTeams', fetcher, { refreshInterval: 10500 })

  if(votesError || teamsError) {
      return (
          <div>
              Error: {votesError} / {teamsError}
          </div>
      )
  }

  if(typeof(votesData) === 'undefined' || typeof(teamsData) === 'undefined') {
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
              teamPoints={0}
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
              teamPoints={0}
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
              teamName={teamsData.teams.team1.name}
              teamPoints={teamsData.teams.team1.points}
              backgroundColor={"#FFB56B"}
              borderColor={"#CB410B"}
              maxPoints={teamsData.teams.pointsToVictory}
            />
            <span className={styles.teamChartOneName}>{teamsData.teams.team1.name}</span>
          </div>
          <div className={styles.doughnutChart}>
          <VotesChart 
            rockVotes={votesData.votes.rock}
            paperVotes={votesData.votes.paper}
            scissorsVotes={votesData.votes.scissors}
          />
          </div>
          <div className={styles.teamChart}>
            <div className={styles.teamChartWidth}></div>
            <TeamPointDisplay 
              teamName={teamsData.teams.team2.name}
              teamPoints={teamsData.teams.team2.points}
              backgroundColor={"#7B68EE"}
              borderColor={"#4B0082"}
              maxPoints={teamsData.teams.pointsToVictory}
            />
            <span className={styles.teamChartTwoName}>{teamsData.teams.team2.name}</span>
          </div>
          </div>
          <div>
            <VotesInfo 
              rockVotes = {votesData.votes.rock}
              paperVotes = {votesData.votes.paper}
              scissorsVotes = {votesData.votes.scissors}
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