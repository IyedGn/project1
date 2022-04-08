const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
  name: String,
  description: String,
  rate: { type: Number, default: 0 },
  price: Number,
  image: String,
})

const Game = mongoose.model('game', gameSchema)
module.exports = Game
