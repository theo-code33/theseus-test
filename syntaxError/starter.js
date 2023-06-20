function isValidClosure(string) {
    const elements = []

    for (let i = 0; i < string.length; i++) {
        let element = string[i]
        if (element === "(" || element === "[" || element === "{") {
            elements.push(element)
        }

        if(element.length === 0) return false

        let startClosure
        if (element === ")") {
            startClosure = elements.pop()
            if(startClosure == '{' || startClosure == '[') return false
        }else if (element === "}") {
            startClosure = elements.pop()
            if(startClosure == '[' || startClosure == '(') return false
        }
        else if (element === "]") {
            startClosure = elements.pop()
            if(startClosure == '{' || startClosure == '(') return false
        }
    }

    return elements.length === 0
}

const result1 = isValidClosure("{([{}])}") // true
const result2 = isValidClosure("([)]") // false
const result3 = isValidClosure("{[])") // false
const result4 = isValidClosure("{[{[({()})]}]}") // true
const result5 = isValidClosure("{[{[({()})]}]]") // false

console.log("result1 : ", result1)
console.log("result2 : ", result2)
console.log("result3 : ", result3)
console.log("result4 : ", result4)
console.log("result5 : ", result5)

/******* Is valid closure ******/
// Check if the set of closures is valid.