const uuid = require('uuid')

let listofUsers = [
  {
    _id: 'c942e551-cae5-4cb4-a78a-ffbc22592557',
    name: 'one',
    age: 0,
    email: 'one@one.com',
    posts: []
  },
  {
    _id: '8685400e-5498-483d-a9ec-79159c570438',
    name: 'two',
    age: 0,
    email: 'two@two.com',
    posts: []
  }
]

export default {
  Query: {
    user: (_parent, {_id}, context, info) => {
      if (listofUsers.length === 0) {
        return {_id: '', name: '', age: 0, email: '', posts: []}
      }
      return listofUsers.find(x => x._id === _id)
    },
    users: (_parent, args, context, info) => {
      return listofUsers
    }
  },
  Mutation: {
    createUser: (__parent, {user}, context, info) => {
      const userid = uuid.v4()
      listofUsers.push({_id: userid, ...user, posts: []})
      return {_id: userid, ...user, posts: []}
    },
    deleteUser: (__parent, {_id}, context, info) => {
      if (listofUsers.length === 0) {
        return {_id: '', name: '', age: 0, email: '', posts: []}
      }
      const result = listofUsers.find(x => x._id === _id)
      listofUsers = listofUsers.filter(x => x._id !== _id)
      return result
    }
  }
}
