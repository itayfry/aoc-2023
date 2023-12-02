const { getInputArrForSolutionDir } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);

const gamesData = arr.reduce((acc, row) => {
    const gameId = row.split(':')[0].split(' ')[1]
    const turns = row.split(': ')[1].split('; ')
    const gameData = { red: 0, green: 0, blue: 0 }
    turns.forEach(turn => {
        const turnCubes = turn.split(', ')
        turnCubes.forEach(cubeCount => {
            const [count, color] = cubeCount.split(' ')
            gameData[color] = Math.max(gameData[color], count)
        })
    })
    acc[gameId] = gameData
    return acc
}, {})

const res = Object.values(gamesData).reduce((acc, gameData) => acc + (gameData.red * gameData.green * gameData.blue), 0)
console.log(res)