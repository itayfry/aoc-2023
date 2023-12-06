const { getInputArrForSolutionDir } = require("../../../utils");

const arr = getInputArrForSolutionDir(__dirname);
const seeds = arr.shift().split(' ').map(Number)
seeds.shift()

arr.shift()
arr.shift() // seed-to-soil

const seedToSoil = []
let line = arr.shift()
while (line) {
    const [destination, source, range] = line.split(' ').map(Number);
    seedToSoil.push({ source, destination, range })
    line = arr.shift()
}

const soilToFertilizer = []
line = arr.shift()
line = arr.shift()
while (line) {
    const [destination, source, range] = line.split(' ').map(Number);
    soilToFertilizer.push({ source, destination, range })
    line = arr.shift()
}
const fertilizerToWater = []
line = arr.shift()
line = arr.shift()
while (line) {
    const [destination, source, range] = line.split(' ').map(Number);
    fertilizerToWater.push({ source, destination, range })
    line = arr.shift()
}
const waterToLight = []
line = arr.shift()
line = arr.shift()
while (line) {
    const [destination, source, range] = line.split(' ').map(Number);
    waterToLight.push({ source, destination, range })
    line = arr.shift()
}
const lightToTemperature = []
line = arr.shift()
line = arr.shift()
while (line) {
    const [destination, source, range] = line.split(' ').map(Number);
    lightToTemperature.push({ source, destination, range })
    line = arr.shift()
}

const temperatureToHumidity = []
line = arr.shift()
line = arr.shift()
while (line) {
    const [destination, source, range] = line.split(' ').map(Number);
    temperatureToHumidity.push({ source, destination, range })
    line = arr.shift()
}
const humidityToLocation = []
line = arr.shift()
line = arr.shift()
while (line) {
    const [destination, source, range] = line.split(' ').map(Number);
    humidityToLocation.push({ source, destination, range })
    line = arr.shift()
}


const res = seeds.map(seed => {
    let soil = seed
    for (const mapping of seedToSoil) {
        if (seed >= mapping.source && seed <= mapping.source + mapping.range) {
            soil = seed + (mapping.destination - mapping.source)
            break
        }
    }
    let fertilizer = soil
    for (const mapping of soilToFertilizer) {
        if (soil >= mapping.source && soil <= mapping.source + mapping.range) {
            fertilizer = soil + (mapping.destination - mapping.source)
            break;
        }
    }
    let water = fertilizer
    for (const mapping of fertilizerToWater) {
        if (fertilizer >= mapping.source && fertilizer <= mapping.source + mapping.range) {
            water = fertilizer + (mapping.destination - mapping.source)
            break;
        }
    }
    let light = water
    for (const mapping of waterToLight) {
        if (water >= mapping.source && water <= mapping.source + mapping.range) {
            light = water + (mapping.destination - mapping.source)
            break;
        }
    }
    let temperature = light
    for (const mapping of lightToTemperature) {
        if (light >= mapping.source && light <= mapping.source + mapping.range) {
            temperature = light + (mapping.destination - mapping.source)
            break;
        }
    }
    let humidity = temperature
    for (const mapping of temperatureToHumidity) {
        if (temperature >= mapping.source && temperature <= mapping.source + mapping.range) {
            humidity = temperature + (mapping.destination - mapping.source)
            break;
        }
    }
    let location = humidity
    for (const mapping of humidityToLocation) {
        if (humidity >= mapping.source && humidity <= mapping.source + mapping.range) {
            location = humidity + (mapping.destination - mapping.source)
            break;
        }
    }
    return location
})

console.log(Math.min(...res))