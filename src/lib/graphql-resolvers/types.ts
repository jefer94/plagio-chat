import { Document, Model, Query, DocumentQuery } from 'mongoose'

type GplInput = {
  readonly id: string
  readonly [key: string]: unknown
}
export type MongooseModel = Model<Document, unknown>
export type GqlData = DocumentQuery<Document, Document, unknown>
export type GqlDatas = DocumentQuery<readonly Document[], Document, unknown>
export type GqlCount = Query<number>
export type GqlQuery = Record<string, unknown>
export type GqlMutationQuery = {
  readonly input: GplInput
}
export type GqlMutationsQuery = {
  readonly input: readonly GplInput[]
}
export type Ids = {
  readonly ids: readonly string[]
}
