const { getInputArrForSolutionDir } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);

const starLocations = []

for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[0].length; col++) {
        if (arr[row][col] === '*') {
            starLocations.push([row, col])
        }
    }
}

let nums = []
let currentNumberStr = ''
let id = 1
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        const char = arr[i][j]
        if (!Number.isNaN(Number(parseInt(char)))) {
            currentNumberStr += char
            if (j === arr[i].length - 1) {
                nums[id++] = { val: Number(currentNumberStr), row: i, startCol: j - currentNumberStr.length + 1, endCol: j }
                currentNumberStr = ''
            }
        }
        else if (currentNumberStr) {
            nums[id++] = { val: Number(currentNumberStr), row: i, startCol: j - currentNumberStr.length, endCol: j - 1 }
            currentNumberStr = ''
        }
    }
}

const numIdsMap = {}
Object.entries(nums).forEach(([id, numObj]) => {
    if (!numIdsMap[numObj.row]) {
        numIdsMap[numObj.row] = {}
    }
    for (let i = numObj.startCol; i <= numObj.endCol; i++) {
        numIdsMap[numObj.row][i] = id
    }
})
let res = 0;
starLocations.forEach(([row, col]) => {
    const neighbors = [
        [row - 1, col - 1],
        [row - 1, col],
        [row - 1, col + 1],
        [row, col - 1],
        [row, col + 1],
        [row + 1, col - 1],
        [row + 1, col],
        [row + 1, col + 1],
    ]
    neighborsValues = new Set()
    neighbors.map(([r, c]) => numIdsMap[r] && numIdsMap[r][c]).filter(x => x).forEach(id => {
        neighborsValues.add(id)
    })
    const nValsArr = Array.from(neighborsValues)
    if (nValsArr.length === 2) {
        res += nums[nValsArr[0]].val * nums[nValsArr[1]].val
    }
})

console.log(res)