import { DocumentQuery, Document, Query, Model, Types } from 'mongoose'
import { DirectMessage, Message, Room, User, DirectRoom } from '../models'

type Paginator = {
  readonly limit: number
  readonly page: number
}

type Ids = {
  readonly ids: readonly string[]
}

type GqlData = DocumentQuery<Document, Document, unknown>
type GqlDatas = DocumentQuery<readonly Document[], Document, unknown>
type GqlQuery = Record<string, unknown>
type GqlCount = Query<number>
type MongooseModel = Model<Document, unknown>

/**
 * @callback QueryOne
 * @param {object} query - GraphQL query.
 * @returns {object} One result.
 */

/**
 * Query one.
 *
 * @param {object} model - Mongoose model.
 * @returns {QueryOne} One result callback.
 */
function queryOne(model: MongooseModel): (query: GqlQuery) => GqlData {
  return (query: GqlQuery): GqlData => model.findOne(query)
}

/**
 * @callback QueryCount
 * @param {object} query - GraphQL query.
 * @returns {object} Count result.
 */

/**
 * Query cout.
 *
 * @param {object} model - Mongoose model.
 * @returns {QueryCount} Count result callback.
 */
function queryCount(model: MongooseModel): (query: GqlQuery) => GqlCount {
  return (query: GqlQuery): GqlCount => model.count(query)
}

/**
 * @callback QueryAll
 * @param {object} query - GraphQL query.
 * @returns {object} All result.
 */

/**
 * Query all.
 *
 * @param {object} model - Mongoose model.
 * @returns {object} All result.
 */
function queryAll(model: MongooseModel): (query: Paginator) => GqlDatas {
  return (query: Paginator): GqlDatas => {
    const { limit, page } = { limit: 100, page: 1, ...query }
    return model.find({}, {}, { skip: limit * page, limit })
  }
}

/**
 * @callback QueryIds
 * @param {object} query - GraphQL query.
 * @returns {object} Ids result.
 */

/**
 * Query ids.
 *
 * @param {object} model - Mongoose model.
 * @returns {object} Ids result.
 */
function queryIds(model: MongooseModel): (query: Ids) => GqlDatas {
  return (query: Ids): GqlDatas => {
    const { ids } = { ids: [], ...query }
    const findMany = ids.map((v) => Types.ObjectId(v))
    return model.find({
      id: { $in: findMany }
    })
  }
}

/**
 * Resolvers.
 *
 * @param {object} model - Mongoose model.
 * @param {object} key - Default key.
 * @param {object} plural - Plural key.
 * @returns {object} Resolvers.
 */
function resolvers(model: MongooseModel, key: string, plural?: string): Record<string, unknown> {
  const one = key
  const count = `${key}Count`
  const ids = `${key}Ids`
  const all = plural || `${key}s`
  return {
    [one]: queryOne(model),
    [count]: queryCount(model),
    [ids]: queryIds(model),
    [all]: queryAll(model)
  }
}

export default {
  ...resolvers(DirectMessage, 'directMessage'),
  ...resolvers(DirectRoom, 'directRoom'),
  ...resolvers(Message, 'message'),
  ...resolvers(Room, 'room'),
  ...resolvers(User, 'user') // ,
  // ...resolvers(DirectMessage, 'index'),
}
