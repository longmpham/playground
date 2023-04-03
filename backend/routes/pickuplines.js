const express = require('express')
const router = express.Router()
const PickUpLineModel = require('../models/PickUpLines')

// @route GET api/
// @description tests pickuplines route
// @access Public
router.get('/test', async (req,res) => res.send('pickupline route'))

// @route GET api/pickuplines/
// @description Get all books
// @access Public

// do then catch method (older)
// router.get("/", (req,res) => {
//   PickUpLineModel.find()
//   .then(pickuplines => res.json(pickuplines))
//   .catch(err => res.status(404).json({ noPickuplinesFound: "No Pickup Lines Found!" }))
// })

// do then await. if success otherwise error (newer)
router.get("/", async (req, res) => {
  const pickuplines = await PickUpLineModel.find()
  try {
    res.status(200).json(pickuplines)
  } catch (error) {
    res.status(404).json({ noPickuplinesFound: "No Pickup Lines Found!", error: error })
  }
})


// @route GET api/pickuplines/:id
// @description Get a pickup line by id
// @access Public
router.get("/:id", async (req, res) => {
  const pickupline = await PickUpLineModel.findById(req.params.id)
  try {
    res.status(200).json(pickupline)
  } catch (error) {
    res.status(404).json({ noPickuplinesFound: "No Pickup Line Found", error: error})
  }
})

// @route POST api/pickuplines
// @description Create a pickup line
// @access Public
router.post("/", async (req, res) => {
  const pickupline = await PickUpLineModel.create(req.body)
  try {
    res.status(200).json({ msg: "Pickup Line Added Successfully"})
  } catch (error) {
    res.status(400).json({ msg: "Unable To Add Pickup Line", error: error })
  }
})

// @route PUT api/pickuplines/:id
// @description Update a pickup line
// @access Public
router.put(":/id", async (req, res) => {
  const pickupline = await PickUpLineModel.findByIdAndUpdate(req.params.id, req.body)
  try {
    res.json({ msg: "Pickup Line Was Updated Successfully"})
  } catch (error) {
    res.status(400).json({ msg: "Unable To Update Pickup Line", error: error })
  }
})

// @route DEL api/pickuplines/:id
// @description Update a pickup line
// @access Public
router.delete("/:id", async (req, res) => {
  const pickupline = await PickUpLineModel.findByIdAndRemove(req.params.id, req.body)
  try {
    res.json({ msg: "Pickup Line Was Deleted Successfully"})
  } catch (error) {
    res.status(400).json({ msg: "Unable To Delete Pickup Line"})
  }
})

module.exports = router