// routes/gameRoutes.js
const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController.js");

router.post("/setcard", cardController.setCardIds);
router.get("/getcard", cardController.getCardIds);

module.exports = router;
