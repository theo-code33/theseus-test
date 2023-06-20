const isValidClosure = require("../syntaxError/starter")

describe('Syntax Error', () => {
    it("should return true because string have correct closure", () => {
        const string = "{[{[({()})]}]}"
        expect(isValidClosure(string)).toBe(true)
    })
    it("should return false because string don't have correct closure", () => {
        const string = "([)]"
        expect(isValidClosure(string)).toBe(false)
    })
    it("should return false because string don't have correct closure", () => {
        const string = "[({}[])]"
        expect(isValidClosure(string)).toBe(true)
    })
    it("should return false because string start with end closure", () => {
        const string = "}([)]"
        expect(isValidClosure(string)).toBe(false)
    })
})