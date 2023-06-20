function sumOfTwoDigitsInTheTable(numbersArray, target) {
    let isSumOfTwoDigitsInTheTable = false

    for (let indexFirstNumber = 0; indexFirstNumber < numbersArray.length; indexFirstNumber++) {
        if(isSumOfTwoDigitsInTheTable) break
        for ( let indexSecondNumber = indexFirstNumber + 1; indexSecondNumber < numbersArray.length; indexSecondNumber++) {
            if (numbersArray[indexFirstNumber] + numbersArray[indexSecondNumber] === target) {
                isSumOfTwoDigitsInTheTable = true
                break
            }
        }
    }
    return isSumOfTwoDigitsInTheTable
}

const result1 = sumOfTwoDigitsInTheTable([1,8,3,6,9,2,5,12], 9) // true
const result2 = sumOfTwoDigitsInTheTable([1,1,3,6,9,2,5,12], 14) // true
const result3 = sumOfTwoDigitsInTheTable([1,80,3,6,9,2,6,12], 17) // false
const result4 = sumOfTwoDigitsInTheTable([1,90,9,6,32,2,5,12], 18) // true

console.log("result1 : ", result1)
console.log("result2 : ", result2)
console.log("result3 : ", result3)
console.log("result4 : ", result4)

/******* Sum of two digits in the table ******/
// If two numbers in the array add up to the target, then the function returns true; otherwise, it returns false.