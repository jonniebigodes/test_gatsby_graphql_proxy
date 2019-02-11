import {mergeTypes} from 'merge-graphql-schemas'
import User from './User'
import Post from './Posts'

export default mergeTypes([User, Post], {all: true})
