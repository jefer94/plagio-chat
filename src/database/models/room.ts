import { Schema, model } from 'mongoose'
import schemaOptions from './configs/schemaOptions'

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  users: { ref: 'User', type: Schema.Types.Array }
}, schemaOptions)

export const Room = model('Room', schema)
