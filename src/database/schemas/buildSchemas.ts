import path from 'path'
import fs from 'fs'
import util from 'util'
import { buildSchema, GraphQLSchema } from 'graphql'

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile)
const exists = util.promisify(fs.exists)

let schemas: GraphQLSchema

export default async function buildSchemas(): Promise<GraphQLSchema> {
  const base = path.resolve(process.cwd(), 'src', 'database', 'schemas')
  if (schemas) return schemas
  const files = [
    './directMessage.gql',
    './directRoom.gql',
    './message.gql',
    './room.gql',
    './user.gql',
    './query.gql',
    './mutation.gql'
  ]
  const lll = files.filter((file) => {
    const fullFile = path.resolve(base, file)
    return exists(fullFile)
  }).map((file) => {
    const fullFile = path.resolve(base, file)
    return readFile(fullFile, 'utf8')
  })
  const listOfSchemas = await Promise.all(lll)
  console.log(listOfSchemas.join('\n').split('\n').map((v, k) => `${k + 1}) ${v}`).join('\n'))
  schemas = buildSchema(listOfSchemas.join('\n'))
  return schemas
}
