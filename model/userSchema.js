const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    googleId: String,
    displayName: String,
    email: String,
    image: String,
    token: { type: Number, default: 0 },
    spinsCount: { type: Number, default: 0 },
    lastSpinTime: { type: Date },
  },
  { timestamps: true }
);

const userdb = new mongoose.model("users", userSchema);

module.exports = userdb;
