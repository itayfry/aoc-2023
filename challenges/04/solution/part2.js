const { getInputArrForSolutionDir } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);

const cardsData = arr.map(line => {
    const [winningNums, cardNums] = line.split(': ')[1].split(' | ').map(x => x.trim().split(/[' ']+/))
    const matching = cardNums.filter(x => winningNums.indexOf(x) !== -1)
    const count = matching.length
    return { instances: 1, wins: count }
})

for (let i = 0; i < cardsData.length; i++){
    const {wins} = cardsData[i]
    if(wins){
        for(let j = i + 1; j <= i + wins; j++ ){
            cardsData[j].instances+= cardsData[i].instances
        }
    }
}

console.log(cardsData.reduce((a, obj) => a + obj.instances, 0))