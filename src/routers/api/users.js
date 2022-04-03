const express = require("express")
const router = express.Router()
const apiController = require("../../controllers/api/usersApiController")

router.get("/listar", apiController.listar)

module.exports = router