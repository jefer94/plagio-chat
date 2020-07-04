import { Schema, model } from 'mongoose'
import { encrypt } from '../../lib/password'
import schemaOptions from './configs/schemaOptions'

const passwordValidator = {
  validator: (v: string): boolean =>
    /[a-z]/.test(v) && // lowercases
    /[A-Z]/.test(v) && // uppercases
    /[0-9]/.test(v) && // numbers
    /\W/.test(v) && // symbols
    v.length > 6 // length
}

const schema = new Schema({
  username: { type: String, lowercase: true, unique: true, required: true },
  email: { type: String, lowercase: true, unique: true, required: true },
  password: { type: String, required: true, validate: passwordValidator },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  directRooms: { ref: 'DirectRoom', type: Schema.Types.Array },
  rooms: { ref: 'Room', type: Schema.Types.Array }
}, schemaOptions)

schema.pre('save', (next) => {
  if (!this.isModified('password')) return next()
  this.password = encrypt(this.password)
  return this
})

export const User = model('User', schema)
