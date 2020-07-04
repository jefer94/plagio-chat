import { connect as c, Mongoose } from 'mongoose'

/**
 * @typedef {object} ConnectConfig
 * @property {string} user - Mongo url.
 * @property {string} user - Mongo user.
 * @property {string} pass - Mongo pass.
 * @property {string} host - Mongo host.
 * @property {string} port - Mongo port.
 * @property {string} db - Mongo db.
 */

type ConnectConfig = {
  readonly url?: string
  readonly user?: string
  readonly pass?: string
  readonly host?: string
  readonly port?: string
  readonly db?: string
}

/**
 * Connect to mongoose.
 *
 * @param {ConnectConfig} config - Connect config.
 * @returns {Promise<object>} Mongoose object.
 */
export default function connect(config: ConnectConfig): Promise<Mongoose> {
  const { url, user, pass, host, port, db } = {
    user: 'root',
    port: '27017',
    host: 'localhost',
    ...config
  }
  const mongoConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  if (url) return c(url, mongoConfig)
  // if (user && !pass) return c(`mongodb://${user}@${host}:${port}/${db}`, mongoConfig)
  return c(`mongodb://${host}:${port}/${db}`, mongoConfig)
}
