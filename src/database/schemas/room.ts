import { User } from './user'

export type Room = {
  readonly id: string
  readonly name: string
  readonly users: readonly User[]
}
