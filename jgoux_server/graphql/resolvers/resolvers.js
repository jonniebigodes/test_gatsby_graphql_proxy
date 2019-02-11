import {mergeResolvers} from 'merge-graphql-schemas'
import User from './resolver_user'
import Post from './resolver_posts'

export default mergeResolvers([User, Post])
