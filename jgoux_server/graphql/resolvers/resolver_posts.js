const uuid = require('uuid')

let listofPosts = []

export default {
  Query: {
    post: (_parent, {_id}, context, info) => {
      if (listofPosts.length===0){
        return {
          _id: '',
          title: '',
          body: '',
          published: false,
          author: {_id: ''}
        }
      }
      return listofPosts.find(x => x._id === _id)
    },
    posts: (_parent, args, context, info) => {
      return listofPosts
    }
  },
  Mutation: {
    createPost: (_parent, {post}, context, info) => {
      listofPosts.push({_id: uuid.v4(), ...post})
    },
    deletePost:(_parent,{_id},context,info)=>{
      if (listofPosts.length === 0) {
        return {
          _id: '',
          title: '',
          body: '',
          published: false,
          author: {_id: ''}
        }
      }
      const result = listofPosts.find(x => x._id === _id)
      listofPosts = listofPosts.filter(x => x._id !== _id)
      return result
    }
  }
}
