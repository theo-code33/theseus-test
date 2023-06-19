
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
    /* TODO */
}

console.log(randomPeer(users))

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