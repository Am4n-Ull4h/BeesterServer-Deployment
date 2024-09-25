const userdb = require("../model/userSchema");

// Spin game logic
exports.spinGame = async (req, res) => {
  const { token } = req.body;
  if (!req.user) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  try {
    // Update user's token in the database
    const updatedUser = await userdb.findOneAndUpdate(
      { googleId: req.user.googleId },
      { $inc: { token: token } },
      { new: true }
    );

    res.status(200).json({
      message: "Spin successful!",
      tokensEarned: token,
      totalTokens: updatedUser.token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.totalToken = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  try {
    const user = await userdb.findOne({ googleId: req.user.googleId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Total tokens retrieved successfully",
      totalTokens: user.token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
