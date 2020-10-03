const helper = require("../helpers")
const { filterArr, calculatePlates } = helper

module.exports = function (desiredWeight, barWeight, weightsAvail, units) {
  return (async () => {
    const arr = []
    const mapToArr = (value, key) => (arr[arr.length] = [key, value])

    const result = calculatePlates(
      desiredWeight,
      barWeight,
      weightsAvail,
      units
    )
    result.forEach(mapToArr)
    const response = filterArr(arr)

    return response
  })()
}
