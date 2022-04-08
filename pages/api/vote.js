import { isAssetError } from 'next/dist/client/route-loader'
import { connectToDatabase } from '../../util/dbConnect'

const vote = async (req, res) => {
    const body = req.body
    if(!body) {
        return res.status(500).json({ msg: 'Shape not selected.' })
    }
    let shapeNumericForm = 0
    if(body.shape === 'rock') {
        shapeNumericForm = 1
    } else if(body.shape === 'paper') {
        shapeNumericForm = 2
    } else if(body.shape === 'scissors') {
        shapeNumericForm = 3
    } else {
        return res.status(500).json({ msg: 'Invalid shape data submitted' })
    }
    const { db } = await connectToDatabase()
    try {
        let query = {}
        const createdAndUpdated = new Date().toISOString()
        query.shape = shapeNumericForm
        query.createdAt = createdAndUpdated
        query.updatedAt = createdAndUpdated
        const result = await db
            .collection('votes')
            .insertOne(query)
        console.log(JSON.stringify(result))
        res.status(200).json({ shape: body.shape })
    } catch(error) {
        console.log(error)
        return res.status(500).json({ msg: 'Could not write the vote to the database' })
    }
}

export default vote