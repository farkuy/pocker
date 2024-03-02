import {cardsDeckTexasHoldEm} from "./game/model/cards";

const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')
const cors = require('cors')
const sequelize = require('./db')

const PORT = process.env.PORT || 5000;

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,

}))

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}