import { Document, Model, Query, DocumentQuery } from 'mongoose'

export type MongooseModel = Model<Document, unknown>
export type GqlData = DocumentQuery<Document, Document, unknown>
export type GqlDatas = DocumentQuery<readonly Document[], Document, unknown>
export type GqlCount = Query<number>
export type GqlQuery = Record<string, unknown>
export type Ids = {
  readonly ids: readonly string[]
}
