const { getInputArrForSolutionDir } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);

const getLevel = cards => {
    const cardsCounter = cards.split('').reduce((acc, char) => {
        acc[char] = acc[char] || 0
        acc[char]++
        return acc
    }, {})
    const jCount = cardsCounter['J'] || 0
    delete cardsCounter['J']

    const count = Object.values(cardsCounter).sort((a, b) => b - a)
    count[0] = (count[0] || 0) + jCount

    if (count[0] === 5) {
        return 7
    }
    if (count[0] === 4) {
        return 6
    }
    if (count[0] === 3) {
        if (count[1] === 2) {
            return 5
        }
        return 4
    }
    if (count[0] === 2) {
        if (count[1] === 2) {
            return 3
        }
        return 2
    }
    return 1;
}

const cardScore = {
    J: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    Q: 12,
    K: 13,
    A: 14,
}

const turns = arr.reduce((acc, line) => {
    const [cards, bid] = line.split(' ')
    acc.push({ cards, bid, level: getLevel(cards) })
    return acc
}, [])

const sortedTurns = turns.sort((a, b) => {
    if (a.level !== b.level) {
        return a.level - b.level;
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (cardScore[a.cards[i]] !== cardScore[b.cards[i]]) {
                return cardScore[a.cards[i]] - cardScore[b.cards[i]]
            }
        }
    }
    return 0;
})

const res = sortedTurns.reduce((acc, curr, i) => {
    return acc + (curr.bid * (i + 1))
}, 0)

console.log(res)