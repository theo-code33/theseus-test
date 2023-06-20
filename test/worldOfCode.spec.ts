import Warrior from '../worldOfCode/classes/Warrior'
import Mage from '../worldOfCode/classes/Mage'
describe('World of Code', () => {
    it("should Warrior log status", () => {
        const warrior = new Warrior('Warrior')
        const spy = jest.spyOn(console, 'log')
        warrior.status()
        expect(spy).toHaveBeenCalledWith('Status of Warrior:')
        expect(spy).toHaveBeenCalledWith('Life: 120')
        expect(spy).toHaveBeenCalledWith('Strength: 10')
        expect(spy).toHaveBeenCalledWith('Experience: 0')
        expect(spy).toHaveBeenCalledWith('Weapons: No weapons')
        expect(spy).toHaveBeenCalledWith("Level: 0")
    })
    it("should Mage log status", () => {
        const mage = new Mage('Mage')
        const spy = jest.spyOn(console, 'log')
        mage.status()
        expect(spy).toHaveBeenCalledWith('Status of Mage:')
        expect(spy).toHaveBeenCalledWith('Life: 100')
        expect(spy).toHaveBeenCalledWith('Strength: 20')
        expect(spy).toHaveBeenCalledWith('Experience: 0')
        expect(spy).toHaveBeenCalledWith('Weapons: No weapons')
        expect(spy).toHaveBeenCalledWith("Level: 0")
    })
})