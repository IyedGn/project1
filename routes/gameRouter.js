const express = require('express')
const gameRouter = express.Router()

const Game = require('../models/gameModel')

gameRouter.post('/', async (req, res) => {
  try {
    let newGame = new Game(req.body)
    let result = await newGame.save()
    res.send({ game: result, msg: 'created' }).J
  } catch (error) {
    console.log(error)
  }
})
gameRouter.get('/', async (req, res) => {
  try {
    let result = await Game.find()
    res.send({ games: result })
  } catch (error) {
    console.log(error)
  }
})
gameRouter.get('/:id', async (req, res) => {
  try {
    let result = await Game.findById({ _id: req.params.id })
    res.send({ games: result, msg: 'get one game' })
  } catch (error) {
    console.log(error)
  }
})
gameRouter.delete('/:id', async (req, res) => {
  try {
    let result = await Game.findByIdAndDelete({ _id: req.params.id })
    res.send({ msg: 'get delteed' })
  } catch (error) {
    console.log(error)
  }
})
gameRouter.put('/:id', async (req, res) => {
  try {
    let result = await Game.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    )
    res.send({ msg: 'game updateds' })
  } catch (error) {
    console.log(error)
  }
})

module.exports = gameRouter
