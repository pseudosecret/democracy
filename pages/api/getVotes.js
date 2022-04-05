import { connectToDatabase } from '../../util/dbConnect'

const getVotes = async (req, res) => {
  const { db } = await connectToDatabase()
  const shapeToGet = req.query.shape
  const query = { shape: Number(shapeToGet) }
  try {
    const result = await db
      .collection('votes')
      .find(query)
      .toArray()
    res.status(200).json({ result })
  } catch (error) {
    console.error('There is an error.', error)
    res.status(500).send(error)
  }
}

export default getVotes