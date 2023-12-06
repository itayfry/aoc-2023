const { getInputArrForSolutionDir } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);
const times = arr[0].split(/Time:\s*/)[1].split(/\s+/).map(Number)
const distances = arr[1].split(/Distance:\s*/)[1].split(/\s+/).map(Number)
const data = times.map((time, index) => ({ time, distance: distances[index] }))
const optionsCount = data.map(({ time, distance }) => {
    let right = Math.ceil(time / 2)
    let left = time - right
    let count = 0
    while (right++ * left-- > distance && left > 0) {
        count += 2
    }
    return time % 2 ? count : count - 1
})

const res = optionsCount.reduce((a, b) => a * b, 1)
console.log(res)