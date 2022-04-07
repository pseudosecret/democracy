/**
 * API used to generate team names when a team emerges victorious
 * and new teams are needed. 
 */

const adjs = [
    'Decoy',
    'Moon',
    'Deadly',
    'Atomic',
    'Night',
    'Thunder',
    'Blood',
    'Gloom',
    'Doom',
    'Holy',
    'Rage',
    'Sinister',
    'Shadow',
    'Crystal',
    'Flame',
    'Infernal',
    'Secret',
    'Screaming',
    'Quantum',
]

const nouns = [
    'Geese',
    'Robots',
    'Ninjas',
    'Witches',
    'Dragons',
    'Wolves',
    'Fangs',
    'Serpents',
    'Wildcats',
    'Zombies',
    'Vampires',
    'Gremlins',
    'Goblins',
    'Vikings',
    'Knights',
    'Sharks',
    'Goats',
    'Platypi',
    'Devils',
    'Angels',
]

export default function handler(req, res) {
    const x1 = Math.floor(Math.random() * adjs.length)
    const y1 = Math.floor(Math.random() * nouns.length)
    const x2 = Math.floor(Math.random() * adjs.length)
    const y2 = Math.floor(Math.random() * nouns.length)
    let newName1 = ''
    let newName2 = ''
    if(adjs[x1].length + nouns[y1] > 12) {
        newName1 = adjs[x1] + ' ' + nouns[y1]
    } else {
        newName1 = 'The ' + adjs[x1] + ' ' + nouns[y1]
    }
    if(adjs[x2].length + nouns[y2] > 12) {
        newName2 = adjs[x2] + ' ' + nouns[y2]
    } else {
        newName2 = 'The ' + adjs[x2] + ' ' + nouns[y2]
    }
    res.status(200).json({ 'team1': newName1, 'team2': newName2 })
}