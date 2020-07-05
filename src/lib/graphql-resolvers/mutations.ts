import { Document, Types } from 'mongoose'
import { MongooseModel, GqlQuery, Ids, GqlDatas } from './types'

type Id = {
  readonly id: string
}

/**
 * @callback AddOne
 * @param {object} query - GraphQL query.
 * @returns {object} Ids result.
 */

/**
 * Add one.
 *
 * @param {object} Model - Mongoose model.
 * @returns {AddOne} One result.
 */
function addOne(Model: MongooseModel): (query: GqlQuery) => Document {
  return (query: GqlQuery): Document => {
    const res = new Model(query)
    res.save()
    return res
  }
}

/**
 * @callback AddMany
 * @param {object} query - GraphQL query.
 * @returns {object} One result.
 */

/**
 * Add many.
 *
 * @param {object} Model - Mongoose model.
 * @returns {AddMany} Many result.
 */
function addMany(Model: MongooseModel): (query: GqlQuery) => Promise<Document> {
  return (query: GqlQuery): Promise<Document> => Model.insertMany(query)
}







/**
 * @callback AddOne
 * @param {object} query - GraphQL query.
 * @returns {object} Ids result.
 */

/**
 * Add one.
 *
 * @param {object} Model - Mongoose model.
 * @returns {AddOne} One result.
 */
function addOne(Model: MongooseModel): (query: Ids) => GqlDatas {
  return (query: GqlQuery): Document => {
    const res = new Model(query)
    res.save()
    return res
  }
}

/**
 * @callback ModifyMany
 * @param {object} query - GraphQL query.
 * @returns {object} One result.
 */

/**
 * Modify many.
 *
 * @param {object} Model - Mongoose model.
 * @returns {ModifyMany} Modify many.
 */
function modifyMany(Model: MongooseModel): (query: Ids) => GqlDatas {
  return (query: Ids): GqlDatas => {
    const { ids } = { ids: [], ...query }
    const findMany = ids.map((v) => Types.ObjectId(v))
    return Model.find({
      id: { $in: findMany }
    })
  }
  // return (query: GqlQuery): Promise<Document> => Model.updateMany(query)
}






/**
 * @callback RemoveOne
 * @param {object} query - GraphQL query.
 * @returns {object} One remove.
 */

/**
 * Remove one.
 *
 * @param {object} Model - Mongoose model.
 * @returns {RemoveOne} One remove.
 */
function removeOne(Model: MongooseModel): (query: Id) => Promise<Document> {
  return async (query: Id): Promise<Document> => {
    const res = await Model.findOne({ id: query.id })
    await res.remove()
    return res
  }
}

/**
 * @callback RemoveMany
 * @param {object} query - GraphQL query.
 * @returns {object} Many remove.
 */

/**
 * Remove many.
 *
 * @param {object} Model - Mongoose model.
 * @returns {RemoveMany} Many remove.
 */
function removeMany(Model: MongooseModel): (query: Ids) => Promise<GqlDatas> {
  return async (query: Ids): Promise<GqlDatas> => {
    const { ids } = { ids: [], ...query }
    const findMany = ids.map((v) => Types.ObjectId(v))
    const res = Model.find({
      id: { $in: findMany }
    })
    await res.remove()
    return res
  }
}

/**
 * Capitalize text.
 *
 * @param {string} s - Input.
 * @returns {string} Text capitalize.
 */
function capitalize(s: string): string {
  return s.replace(/^([a-z])/, (v) => v.toUpperCase())
}

/**
 * Resolvers.
 *
 * @param {object} model - Mongoose model.
 * @param {object} key - Default key.
 * @param {object} plural - Plural key.
 * @returns {object} Resolvers.
 */
export function resolveMutations(model: MongooseModel, key: string, plural?: string):
  Record<string, unknown> {
  const keyCapitalize = capitalize(key)
  const pluralCapitalize = capitalize(plural || `${key}s`)
  const one = `addOne${keyCapitalize}`
  const many = `addMany${pluralCapitalize}`
  const dOne = `removeOne${keyCapitalize}`
  const dMany = `removeMany${pluralCapitalize}`
  const all = plural || `${key}s`
  return {
    [one]: addOne(model),
    [many]: addMany(model),
    [dOne]: removeOne(model),
    [dMany]: removeMany(model)
  }
}
