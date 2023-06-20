
let users = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
]

function randomPeer(users) {
    const NUMBER_OF_USER_PER_GROUP = 2

    const isOdd = users.length % NUMBER_OF_USER_PER_GROUP !== 0
    const numberOfGroup = isOdd ? (users.length - (NUMBER_OF_USER_PER_GROUP + 1)) / NUMBER_OF_USER_PER_GROUP : users.length / NUMBER_OF_USER_PER_GROUP

    let randomPeerGroup = []
    const indexUsed = []

    const getRandomPeer = (numberOfUser) => {
        let randomIndex
        const randomPeer = []
        for (let indexUser = 0; indexUser < numberOfUser; indexUser++) {
            do {
                randomIndex = Math.floor(Math.random() * users.length)
                if(!indexUsed.includes(randomIndex)) break
            } while (indexUsed.includes(randomIndex));
            indexUsed.push(randomIndex)
            randomPeer.push(users[randomIndex])
        }
        randomPeerGroup = [...randomPeerGroup, randomPeer]
    }

    if(isOdd) {
        getRandomPeer(NUMBER_OF_USER_PER_GROUP + 1)
    }

    for (let index = 0; index < numberOfGroup; index++) {
        getRandomPeer(NUMBER_OF_USER_PER_GROUP)
    }
    return randomPeerGroup
}

console.log(randomPeer(users))

module.exports = randomPeer

/******* Users random peer ******/
// Creation of random pairs of users
// If the number of players is odd, there will be one group of 3 players.
/**
 * Exemple result expected :
 */
/* 
[
    [ { id: 5 }, { id: 1 } ],
    [ { id: 3 }, { id: 7 } ],
    [ { id: 6 }, { id: 8 } ],
    [ { id: 4 }, { id: 2 } ]
]
*/