const mongoose = require("mongoose")
const { Schema, model } = mongoose

const PickUpLineSchema = new Schema({
  phrase: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  favourite: {
    type: Boolean,
  },
})

const PickUpLineModel = model("PickUpLine", PickUpLineSchema)
module.exports = PickUpLineModel