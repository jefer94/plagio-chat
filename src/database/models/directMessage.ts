import { Schema, model } from 'mongoose'
import schemaOptions from './configs/schemaOptions'

const schema = new Schema({
  text: { type: String, required: true },
  directRoom: { ref: 'DirectRoom', type: Schema.Types.ObjectId },
  user: { ref: 'User', type: Schema.Types.ObjectId, required: true }
}, schemaOptions)

export const DirectMessage = model('DirectMessage', schema)
// export const DirectMessageTC = composeWithMongoose(DirectMessage)

// export const DirectMessageQuery = {
//   // directMessageById: DirectMessageTC.getResolver('findById'),
//   // directMessageByIds: DirectMessageTC.getResolver('findByIds'),
//   // directMessageOne: DirectMessageTC.getResolver('findOne'),
//   // directMessageMany: DirectMessageTC.getResolver('findMany'),
//   // directMessageCount: DirectMessageTC.getResolver('count'),
//   // directMessageConnection: DirectMessageTC.getResolver('connection'),
//   // directMessagePagination: DirectMessageTC.getResolver('pagination')
// }

// export const DirectMessageMutation = {
//   // directMessageCreateOne: DirectMessageTC.getResolver('createOne'),
//   // directMessageCreateMany: DirectMessageTC.getResolver('createMany'),
//   // directMessageUpdateById: DirectMessageTC.getResolver('updateById'),
//   // directMessageUpdateOne: DirectMessageTC.getResolver('updateOne'),
//   // directMessageUpdateMany: DirectMessageTC.getResolver('updateMany'),
//   // directMessageRemoveById: DirectMessageTC.getResolver('removeById'),
//   // directMessageRemoveOne: DirectMessageTC.getResolver('removeOne'),
//   // directMessageRemoveMany: DirectMessageTC.getResolver('removeMany')
// }
