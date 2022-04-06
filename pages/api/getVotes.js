import { connectToDatabase } from '../../util/dbConnect'

const getVotes = async (req, res) => {
  const { db } = await connectToDatabase()
  try {
    const result = await db
      .collection('votes')
      .find()
      .toArray()
    const stringedout = JSON.stringify(result)
    const rockVotes = Object.keys(result.filter(vote => vote.shape === 1)).length
    const paperVotes = Object.keys(result.filter(vote => vote.shape === 2)).length
    const scissorsVotes = Object.keys(result.filter(vote => vote.shape === 3)).length
    let votes = new Object()
    votes.rock = rockVotes
    votes.paper = paperVotes
    votes.scissors = scissorsVotes
    res.status(200).json({ votes })
  } catch (error) {
    console.error('There is an error.', error)
    res.status(500).send(error)
  }
}

export default getVotes