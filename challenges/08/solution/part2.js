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
let cycles = currPositions.map(curr => {
    let cyclesCount = 0;
    while (!curr.endsWith('Z')) {
        cyclesCount++
        for (const step of directions) {
            curr = graph[curr][step]
        }
    }
    return cyclesCount
})

// All cycles in my input are prime numbers so this is redundant. But if they did have a common denominator this would be required
const maxCommonDenominator = Math.min(...cycles.map(x => Math.floor(Math.sqrt(x))))
let i = 2;
while (i <= maxCommonDenominator) {
    if (cycles.every(x => !(x % i))) {
        cycles = cycles.map(x => x / i)
        i = 2
    }
    else {
        i++
    }
}

const mul = cycles.reduce((a, b) => a * b, 1)

console.log(mul * directions.length) 