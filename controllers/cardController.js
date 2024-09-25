const Card = require("../model/cardSchema");

// Admin route to set three card IDs globally
exports.setCardIds = async (req, res) => {
  const { cardIds } = req.body;

  // Check if exactly 3 card IDs are provided
  if (!cardIds || cardIds.length !== 3) {
    return res
      .status(400)
      .json({ message: "You must provide exactly 3 card IDs." });
  }

  try {
    // Check if the cards already exist (so admin can update them)
    let cardEntry = await Card.findOne();

    if (cardEntry) {
      // Update existing card entry with new IDs
      cardEntry.cardIds = cardIds;
      await cardEntry.save();
    } else {
      // Create new card entry if it doesn't exist
      cardEntry = new Card({ cardIds });
      await cardEntry.save();
    }

    res.status(200).json({
      message: "Card IDs set successfully",
      cardIds: cardEntry.cardIds,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Controller to get the card IDs
exports.getCardIds = async (req, res) => {
  try {
    // Find the card entry in the database
    const cardEntry = await Card.findOne();

    if (!cardEntry) {
      return res.status(404).json({ message: "No card IDs found" });
    }

    res.status(200).json({
      message: "Card IDs retrieved successfully",
      cardIds: cardEntry.cardIds,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
