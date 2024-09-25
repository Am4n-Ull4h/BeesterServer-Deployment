// routes/gameRoutes.js
const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController.js");

// Route to spin the game and earn tokens
router.get("/game/spin", gameController.spinGame);
router.get("/game/token", gameController.totalToken);

module.exports = router;
