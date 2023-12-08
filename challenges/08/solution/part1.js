const { getInputArrForSolutionDir } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);

const directions = arr[0]

arr.shift()
arr.shift()

const graph = arr.reduce((acc, line) => {
    const [_, curr, L, R] = line.match(/([A-Z]+) = \(([A-Z]+), ([A-Z]+)\)/)
    acc[curr] = { L, R }
    return acc
}, {})

let curr = 'AAA'
let stepsCount = 0;
while (curr !== 'ZZZ') {
    for (const step of directions) {
        stepsCount++
        curr = graph[curr][step]
    }
}

console.log(stepsCount)