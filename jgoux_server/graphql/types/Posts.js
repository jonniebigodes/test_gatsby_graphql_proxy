export default `
    type Post {
        _id:ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
    }

    type Query {
        post(_id:ID!): Post!
        posts: [Post!]!
    }

    type Mutation {
        createPost(post: CreatePostInput): Post!
        deletePost(_id: ID!):Post!
    }

    type Subscription {
        post:PostSubscriptionPayload!
    }

    type PostSubscriptionPayload {
        mutation: MutationType!
        post: Post!
    }

    input CreatePostInput {
        title:String!
        body: String!
        published: Boolean!
        author: ID!
    }
    enum MutationType {
        CREATED
        DELETED
    }
`
