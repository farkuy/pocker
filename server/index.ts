import {cardsDeckTexasHoldEm} from "./game/model/cards";

require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')
const cors = require('cors')

const PORT = 5000;

const app = express()

/*app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
}))*/

const start = async () => {
    try {
        /*await sequelize.authenticate()
        await sequelize.sync()*/
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();