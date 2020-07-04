import { Schema, model } from 'mongoose'
import schemaOptions from './configs/schemaOptions'

const schema = new Schema({
  text: { type: String, required: true },
  room: { ref: 'Room', type: Schema.Types.ObjectId, required: true },
  user: { ref: 'User', type: Schema.Types.ObjectId, required: true }
}, schemaOptions)

export const Message = model('Message', schema)
