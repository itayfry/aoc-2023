const { getInputArrForSolutionDir } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);
const findFirstNum = str => {
    for (const char of str){
        if (char == Number(char))
        return char
    }
}

const numbers = arr.map(str => Number(findFirstNum(str) + findFirstNum(str.split('').reverse().join(''))))

const res = numbers.reduce((acc, curr) => acc + curr, 0)

console.log(res)