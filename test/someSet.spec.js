const sumOfTwoDigitsInTheTable = require("../someSet/starter")

describe('someSet', () => {
    it('should return true if two numbers in the array is equal to the target', () => {
        expect(sumOfTwoDigitsInTheTable([1,8,3,6,9,2,5,12], 9)).toEqual(true)
    })
    it('should return false because there is no two numbers in the array is equal to the target', () => {
        expect(sumOfTwoDigitsInTheTable([1,80,3,6,9,2,6,12], 17)).toEqual(false)
    })
})