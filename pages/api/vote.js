import { connectToDatabase } from '../../util/dbConnect'

const vote = async (req, res) => {
    const body = req.body
    console.log('body: ', body)
    if(!body) {
        return res.status(500).json({ msg: 'Shape not selected.' })
    }
    res.status(200).json({ shape: body.shape })
}

export default vote