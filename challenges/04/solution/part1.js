const { getInputArrForSolutionDir } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);

let res = 0;
for (const line of arr) {
    const [winningNums, cardNums] = line.split(': ')[1].split(' | ').map( x => x.trim().split(/[' ']+/))
    const matching = cardNums.filter( x => winningNums.indexOf(x) !== -1)
    const count = matching.length
    if (count){
        res += Math.pow(2, count -1)
    }
}

console.log(res)