import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TeamPointDisplay from '../components/team-points-display'
import VotesChart from '../components/votes-chart'

export default function Home() {
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
          <VotesChart />
          <TeamPointDisplay 
            teamName={"Team 2"}
            teamPoints={36}
            backgroundColor={"#7B68EE"}
            borderColor={"#4B0082"}
          />
        </div>
      </main>
    </div>
  )
}
