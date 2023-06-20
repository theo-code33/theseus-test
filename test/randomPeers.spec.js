const randomPeer = require("../randomPeers/starter")

describe('randomPeers', () => {
    it('should return an array of four random peers', () => {
        const users = [
            {id:1},
            {id:2},
            {id:3},
            {id:4},
            {id:5},
            {id:6},
            {id:7},
            {id:8},
        ]
        const result = randomPeer(users)
        expect(result.length).toEqual(4)
    })
    it('should return an array of random peers with the first peer contains three users', () => {
        const users = [
            {id:1},
            {id:2},
            {id:3},
            {id:4},
            {id:5},
            {id:6},
            {id:7},
            {id:8},
            {id:9},
        ]
        const result = randomPeer(users)
        expect(result[0].length).toEqual(3)
        expect(result.length).toEqual(4)
    })
})