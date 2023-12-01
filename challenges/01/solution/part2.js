const { getInputArrForSolutionDir, reverseString } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const digitsStrs = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const reversedDigitsStrs = digitsStrs.map(reverseString)

const findFirstNum = str => {
    let firstDigit, firstDigitIndex = str.length;
    for (const digit of digits) {
        const index = str.indexOf(digit)
        if (index != -1 && index < firstDigitIndex) {
            firstDigitIndex = index;
            firstDigit = digit
        }
    }
    for (const digitStr of digitsStrs) {
        const index = str.indexOf(digitStr)
        if (index != -1 && index < firstDigitIndex) {
            firstDigitIndex = index;
            firstDigit = digitsStrs.findIndex(x => x === digitStr) + 1
        }
    }
    return firstDigit.toString();
}
const findFirstNumReverse = str => {
    const _str = reverseString(str);
    let firstDigit, firstDigitIndex = _str.length;
    for (const digit of digits) {
        const index = _str.indexOf(digit)
        if (index != -1 && index < firstDigitIndex) {
            firstDigitIndex = index;
            firstDigit = digit
        }
    }
    for (const digitStr of reversedDigitsStrs) {
        const index = _str.indexOf(digitStr)
        if (index != -1 && index < firstDigitIndex) {
            firstDigitIndex = index;
            firstDigit = reversedDigitsStrs.findIndex(x => x === digitStr) + 1
        }
    }
    return firstDigit.toString();
}


const numbers = arr.map(str => Number(findFirstNum(str) + findFirstNumReverse(str)))

const res = numbers.reduce((acc, curr) => acc + curr, 0)

console.log(res)