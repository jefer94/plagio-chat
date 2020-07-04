import { User } from './user'

export type DirectRoom = {
  readonly id: string
  readonly users: readonly User[]
}
