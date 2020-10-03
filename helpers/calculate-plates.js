const setRack = require("./setRack")
const addAvailablePlates = require("./addAvailablePlates")
const hasEnoughPlates = require("./hasEnoughPlates")
const validate = require("./validate")

const kilos = [25, 20, 15, 10, 5, 2.5, 2, 1.5, 1, 0.5]
const pounds = [55, 44, 33, 22, 11, 5.5, 4.4, 3.3, 2.2, 1.1]

module.exports = function (desiredWeight, barWeight, weightsAvail, units) {
  validate.number(desiredWeight, "desiredWeight")
  validate.number(barWeight, "barWeight")
  validate.array(weightsAvail, "weightsAvail")

  let weights = units === "kilos" ? kilos : pounds
  let platesToRack = setRack(weights)
  let platesAvailable = addAvailablePlates(weights, weightsAvail)
  let amountLeft = desiredWeight - barWeight

  let checkWeight = hasEnoughPlates(platesAvailable, amountLeft)

  if (!checkWeight) {
    throw new Error("You have not enough plates available")
  }

  while (amountLeft > 0) {
    let found = false
    for (let [weight, numPlates] of platesAvailable) {
      let amount = weight * 2

      if (numPlates > 0 && amount <= amountLeft) {
        amountLeft -= amount
        platesAvailable.set(weight, numPlates - 2)
        platesToRack.set(weight, platesToRack.get(weight) + 2)
        found = true
        break
      }
    }
    if (!found) {
      break
    }
  }

  return platesToRack
}
