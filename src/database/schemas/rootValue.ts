import { resolveQueries } from '../../lib/graphql-resolvers'
import { DirectMessage, Message, Room, User, DirectRoom } from '../models'

export default {
  ...resolveQueries(DirectMessage, 'directMessage'),
  ...resolveQueries(DirectRoom, 'directRoom'),
  ...resolveQueries(Message, 'message'),
  ...resolveQueries(Room, 'room'),
  ...resolveQueries(User, 'user') // ,
  // ...resolvers(DirectMessage, 'index'),
}
