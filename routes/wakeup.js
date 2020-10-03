const wakeupDyno = require("../logic/wake-up-dyno")

module.exports = (req, res) => {
  try {
    wakeupDyno()
      .then((response) =>
        res.status(201).json({ message: "Dyno has woken up", response })
      )
      .catch(({ message }) => res.status(404).json({ error: message }))
  } catch ({ message }) {
    res.status(404).json({ error: message })
  }
}
