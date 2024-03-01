const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')
const cors = require('cors')

const PORT = process.env.PORT || 5000;

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,

}))
app.listen(PORT, () => console.log(`server started on port ${PORT}`))
