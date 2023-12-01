const { readFileSync } = require("fs");
const questionRelativePath = 'question/input.txt'
const getInputArrForSolutionDir = (solutionDirname) => {
    const questionAbsolutePath = solutionDirname + '/../' + questionRelativePath;
    const input = readFileSync(questionAbsolutePath , 'utf-8')
    const inputArr = input.split("\n");
    return inputArr;
}

const reverseString = str => str.split('').reverse().join('')

module.exports = { getInputArrForSolutionDir, reverseString }