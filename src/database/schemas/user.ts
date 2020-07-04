import { DirectRoom } from './directRoom'
import { Room } from './room'

export type User = {
  readonly id?: string
  readonly username?: string
  readonly email?: string
  // password: String
  // role: String
  readonly directRooms?: readonly DirectRoom[]
  readonly rooms?: readonly Room[]
}
