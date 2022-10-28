import { Schema, model, models } from 'mongoose'

const movementSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    required: true,

  },
  account: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

const Movement = models.Movement || model('Movement', movementSchema)

export default Movement
