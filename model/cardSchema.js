const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  cardIds: {
    type: [String],
    required: true,
    validate: [arrayLimit, "You must provide exactly 3 card IDs"],
  },
});

function arrayLimit(val) {
  return val.length === 3; // Ensure exactly 3 card IDs are provided
}

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
