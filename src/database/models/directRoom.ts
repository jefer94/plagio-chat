import { Schema, model } from 'mongoose'
import schemaOptions from './configs/schemaOptions'

const schema = new Schema({
  users: [
    { ref: 'User', type: Schema.Types.ObjectId, required: true },
    { ref: 'User', type: Schema.Types.ObjectId, required: true }
  ]
}, schemaOptions)

export const DirectRoom = model('DirectRoom', schema)
