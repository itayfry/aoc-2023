const { getInputArrForSolutionDir } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);
const time = Number(arr[0].split(/Time:\s*/)[1].split(/\s+/).join(''))
const distance = Number(arr[1].split(/Distance:\s*/)[1].split(/\s+/).join(''))

let right = Math.ceil(time / 2)
let left = time - right
let count = 0
while (right++ * left-- > distance && left > 0) {
    count += 2
}
console.log(time % 2 ? count : count - 1)