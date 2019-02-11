import express from 'express'
import expressGraphQL from 'express-graphql'
import bodyParser from 'body-parser'
import cors from 'cors'
import schema from './graphql'

const app = express()
const PORT = process.env.PORT || 3000

app.use('/dummy', (request, response) => {
  return response.status(200).json([
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
  ])
})
app.use('/graphqlserver', cors(), bodyParser.json(), expressGraphQL({schema, graphiql: true}))

app.listen(PORT, () => {
  console.log('====================================')
  console.log(`Server running on port ${PORT}`)
  console.log('====================================')
})
