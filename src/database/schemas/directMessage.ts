import { User } from './user'
import { DirectRoom } from './directRoom'

export type DirectMessage = {
  readonly id: string
  readonly text: string
  readonly directRoom: DirectRoom
  readonly user: User
}
