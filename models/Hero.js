const mongoose = require("mongoose");

const HeroSchema = mongoose.Schema({
  superHero: {
    type: String,
    required: [true, "please name enter"],
    unique: true,
    trim: true,
  },
  realName: {
    type: String,
    required: [true, "please real name enter"],
    maxLength: [200, "please keep real name shorter than 200"],
  },
});

module.exports = mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
