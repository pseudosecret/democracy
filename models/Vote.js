const mongoose = require('mongoose')

const Schema = mongoose.Schema

let VoteSchema = new Schema({
    user: {
        type: Number,
        required: [true, 'Someone has to be the person voting, right?']
    },
//    time: {
//        type: Date,
//        required: [true, 'Voting happens at a time, not everywhen or nowhen.'],
//        default: Date.now
//    },
    shape: {
        type: Number,
        min: [1, 'Rock is the minimum for shape values. 1: rock, 2: paper, 3: scissors.'],
        max: [3, 'Scissors is the maximum for shape values. 1: rock, 2: paper, 3: scissors.'],
        required: [true, 'When someone votes, they have to vote for something, right?']
    }
}, { collection: 'Votes' })

export default mongoose.models.Vote || mongoose.model('Vote', VoteSchema)