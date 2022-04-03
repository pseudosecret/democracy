import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TeamPointDisplay from '../components/team-points-display'
import VotesChart from '../components/votes-chart'
import VotesInfo from '../components/votes-info'
import Voting from '../components/voting'
// import dbConnect from '../lib/dbConnect'
// import Vote from '../models/Vote'
import clientPromise from '../lib/mongodb'

const Index = ({ isConnected }) => {
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
          <VotesInfo
            rockVotes={52}
            paperVotes={11}
            scissorsVotes={26}
          />
        </div>
        <div>
          <Voting />
        </div>
      </main>
    </div>
  )
}
/**
export async function getServerSideProps() {
  await dbConnect()

  const rockResult = Vote.countDocuments({shape: 1, function(err, count) {
    if(err) {
      console.log(err)
    } else {
      console.log("Count of rock votes: ", count)
    }
  }})

  const paperResult = Vote.countDocuments({shape: 2, function(err, count) {
    if(err) {
      console.log(err)
    } else {
      console.log("Count of paper votes: ", count)
    }
  }})

  const scissorsResult = Vote.countDocuments({shape: 3})
  
  return { props: { rockVotes: JSON.parse(JSON.stringify(rockVotes)),
                    paperVotes: JSON.parse(JSON.stringify(paperVotes)),
                    scissorsVotes: JSON.parse(JSON.stringify(scissorsVotes)) }}
}
**/

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the folloing code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}


export default Index