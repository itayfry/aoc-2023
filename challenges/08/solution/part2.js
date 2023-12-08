const { getInputArrForSolutionDir } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);

const directions = arr[0]

arr.shift()
arr.shift()

const graph = arr.reduce((acc, line) => {
    const [_, curr, L, R] = line.match(/([0-9A-Z]+) = \(([0-9A-Z]+), ([0-9A-Z]+)\)/)
    acc[curr] = { L, R }
    return acc
}, {})

const currPositions = Object.keys(graph).filter(key => key.endsWith('A'))
const cycles = currPositions.map(curr => {
    let cyclesCount = 0;
    while (!curr.endsWith('Z')) {
        cyclesCount++
        for (const step of directions) {
            curr = graph[curr][step]
        }
    }
    return cyclesCount
})

const mul = cycles.reduce((a, b) => a * b, 1)

console.log(mul * directions.length) // since all cycles are prime numbers. If they weren't I would divide by common denominator