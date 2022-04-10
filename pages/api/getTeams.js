import { connectToDatabase } from '../../util/dbConnect'

const getTeams = async (req, res) => {
    const { db } = await connectToDatabase()
    try {
        const teams = await db
            .collection('teams')
            .findOne({ active: true })
        res.status(200).json({ teams })
    } catch(error) {
        console.error('There is an error.', error)
        res.status(500).send(error)
    }
}

export default getTeams