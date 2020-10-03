const { Router } = require("express")
const bodyParser = require("body-parser")

const wakeupDyno = require("./wakeup")
const calculatePlates = require("./calc-num-plates")

const router = Router()
const jsonBodyParser = bodyParser.json()

router.get("/wakeup", [jsonBodyParser], wakeupDyno)
router.get("/calcnumplate/:data", [jsonBodyParser], calculatePlates)

module.exports = router
