const { getInputArrForSolutionDir } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);
let currentNumberStr = '';
let sum = 0;

const hasAdjecentSymbol = (row, startColumn, endColumn) => {
    const checkStart = Math.max(startColumn - 1, 0)
    const checkEnd = Math.min(endColumn + 1, arr[0].length - 1)
    if (row > 0) {
        for (let col = checkStart; col <= checkEnd; col++) {
            if (isSymbol(arr[row - 1][col])) {
                return true;
            }
        }
    }
    if (row < arr.length - 1) {
        for (let col = checkStart; col <= checkEnd; col++) {
            if (isSymbol(arr[row + 1][col])) {
                return true;
            }
        }
    }
    if (startColumn > 0) {
        if (isSymbol(arr[row][startColumn - 1])) {
            return true;
        }
    }
    if (endColumn + 1 < arr[row].length) {
        if (isSymbol(arr[row][endColumn + 1])) {
            return true;
        }
    }
    return false;
}

const isSymbol = char => char !== undefined && char !== '.' && Number.isNaN(Number(parseInt(char)))

let nums = []
let validNums = []
let invalidNums = []
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        const char = arr[i][j]
        if (!Number.isNaN(Number(parseInt(char)))) {
            currentNumberStr += char
            if (j === arr[i].length - 1) {
                nums.push(currentNumberStr)
                if (hasAdjecentSymbol(i, j - currentNumberStr.length + 1, j)) {
                    validNums.push(currentNumberStr)
                    sum += Number(currentNumberStr)
                }
                else {
                    invalidNums.push(currentNumberStr)
                }
                currentNumberStr = ''
            }
        }
        else if (currentNumberStr) {
            nums.push(currentNumberStr)
            if (hasAdjecentSymbol(i, j - currentNumberStr.length, j - 1)) {
                validNums.push(currentNumberStr)
                sum += Number(currentNumberStr)
            }
            else {
                invalidNums.push(currentNumberStr)
            }
            currentNumberStr = ''
        }
    }
}

console.log(sum)
