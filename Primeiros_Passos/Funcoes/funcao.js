function sayMyName(name) {
    console.log('Your name is: ' + name)
}

sayMyName('Lucas')
sayMyName('Amanda')

function square(value) {
    return value * value
}

const tenSquared = square(10) + square(10)
console.log(tenSquared)

function addInterest(value, percentage) {
    const interestValue = (percentage / 100) * value
    return value + interestValue
}

const newValue = addInterest(100, 10)
console.log(newValue)