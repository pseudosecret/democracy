import { connectToDatabase } from '../../util/dbConnect'

const getVotes = async (req, res) => {
  const { db } = await connectToDatabase()
  try {
    const result = await db
      .collection('votes')
      .find()
      .toArray()
    const rockVotes = Object.keys(result.filter(vote => vote.shape === 1)).length
    const paperVotes = Object.keys(result.filter(vote => vote.shape === 2)).length
    const scissorsVotes = Object.keys(result.filter(vote => vote.shape === 3)).length
    const votes = {
      rock: rockVotes,
      paper: paperVotes,
      scissors: scissorsVotes
    }
    res.status(200).json({ votes })
  } catch (error) {
    console.error('There is an error.', error)
    res.status(500).send(error)
  }
}

export default getVotes