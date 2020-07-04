import { Room } from './room'
import { User } from './user'

export type Message = {
  readonly id: string
  readonly text: string
  readonly room: Room
  readonly user: User
}
