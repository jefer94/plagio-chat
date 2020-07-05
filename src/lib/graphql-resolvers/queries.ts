import { Types } from 'mongoose'
import { MongooseModel, GqlQuery, Ids, GqlData, GqlCount, GqlDatas } from './types'

type Paginator = {
  readonly limit: number
  readonly page: number
}

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
 * @returns {QueryAll} All result.
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
 * @returns {QueryIds} Ids result.
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
export function resolveQueries(model: MongooseModel, key: string, plural?: string):
  Record<string, unknown> {
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
