export default `
    type User {
        _id:String!
        name:String!
        email:String!
        age:Int!
        posts:[Post!]
    }
    type Query{
        user(_id:ID!):User!
        users:[User!]!
    }
    type Mutation {
        createUser(user:CreateUserInput):User!
        deleteUser(_id:String!): User!
    }

    input CreateUserInput{
        name: String!
        email:String!
        age:Int
    }
`
