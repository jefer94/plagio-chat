import graphqlHTTP from 'express-graphql'
import { NextApiRequest, NextApiResponse } from 'next'
import { buildSchema } from 'graphql'
import buildSchemas from '../../database/schemas/buildSchemas'
import rootValue from '../../database/schemas/rootValue'
// import schema from '../../database/graphql'

// type A = {
//   readonly a?: string
// }

// const rootValue = {
//   hello: async ({ a }: A) => {
//     return { hello: a || 'a' }
//   }
// }

export default async function GraphQL(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // console.log('s', schema)
  // res.json({})
  const middleware = graphqlHTTP({
    schema: await buildSchemas(),
    rootValue,
    graphiql: true
  })
  middleware(req, res)
}
