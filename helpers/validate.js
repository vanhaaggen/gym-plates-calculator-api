module.exports = {
  number(target, name) {
    if (target === "") throw new Error(`Targert weight is empty or blank`)
    if (typeof target != "number")
      throw TypeError(`Targert weight is empty or not a Number`)
  },
  array(target, name) {
    if (!Array.isArray(target))
      throw new Error(`${name} parameter is not an Array`)
  },
}
