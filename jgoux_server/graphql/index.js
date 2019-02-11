import {makeExecutableSchema} from 'graphql-tools'
import resolvers from './resolvers/resolvers'
import typeDefs from './types/types'

const schema = makeExecutableSchema({typeDefs, resolvers})
export default schema
