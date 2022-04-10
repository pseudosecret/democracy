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
    'Samurai',
    'Sharks',
    'Goats',
    'Platypi',
    'Devils',
    'Angels',
]

const newTeamNames = () => {
    let newName1 = ''
    let newName2 = ''
    let x1 = Math.floor(Math.random() * adjs.length)
    let y1 = Math.floor(Math.random() * nouns.length)
    let x2 = Math.floor(Math.random() * adjs.length)
    let y2 = Math.floor(Math.random() * nouns.length)
    while(x1 === x2) {
        x1 = Math.floor(Math.random() * adjs.length)
    }
    while(y1 === y2) {
        y1 = Math.floor(Math.random() * nouns.length)
    }
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
    return { 'team1': newName1, 'team2': newName2 }
}

export default newTeamNames