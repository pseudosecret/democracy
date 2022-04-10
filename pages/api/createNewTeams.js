import { connectToDatabase } from '../../util/dbConnect'
import newTeamNames from '../../util/generateTeamNames'

const createNewTeams = async (req, res) => {
    try {
        const { db } = await connectToDatabase()
        const filter = { active: true }
        const deactivationQuery = { 
            $set: {
                active: false,
                timeUpdated: new Date().toISOString()
            }
        }
        const names = newTeamNames()
        const insertQuery = {
            team1: {
                id: 1,
                name: names.team1,
                points: 0
            },
            team2: {
                id: 2,
                name: names.team2,
                points: 0
            },
            active: true,
            pointsToVictory: 500,
            timeCreated: new Date().toISOString(),
            timeUpdated: new Date().toISOString()
        }
        const updateResult = await db
            .collection('teams')
            .updateMany(filter, deactivationQuery)
        const insertResult = await db
            .collection('teams')
            .insertOne(insertQuery)
        console.log('teams collection update results: ' + JSON.stringify(updateResult))
        console.log('teams collection insert results: ' + JSON.stringify(insertResult))
        console.log('teams had the following inserted into it and all others rendered deactive: \n' + JSON.stringify(insertQuery))
        res.status(200).json(insertResult)
    } catch(error) {
        console.log(error)
        return res.status(500).json({ msg: 'Could not update/insert the the teams database as part of createNewTeams' })
    }
}

export default createNewTeams