const mongoose = require("mongoose");

const PlayersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    
  },

  email: {
    type: String,
    
  },
  password: {
    type: String,
    required: true,
  },
});

const Player = mongoose.model("Player", PlayersSchema);
module.exports = Player;
