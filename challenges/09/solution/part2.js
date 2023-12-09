const { getInputArrForSolutionDir } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);

const res = arr.map(line => {
    let nums = line.split(' ').map(Number)
    const queue = [nums];
    while (! queue[queue.length-1].every(x => x === 0)){
        const nextNums = []
        for (let i = 0; i < nums.length - 1; i++){
            nextNums[i] = nums[i+1] - nums[i]
        }
        nums = nextNums
        queue.push(nextNums)
    }
    let decreaseBy = 0;
    for(let i = queue.length - 2; i >= 0; i--){
        const currentLine = queue[i]
        currentLine.unshift(currentLine[0] - decreaseBy)
        decreaseBy = currentLine[0]
    }
    return decreaseBy;
    
}).reduce((a,b) => a + b, 0)

console.log(res)