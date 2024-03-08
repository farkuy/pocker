
require('dotenv').config()
const express = require('express')
export const sequelize = require('./db')
export const { router } = require('./routes/index')
const models = require('./models/models')
const cors = require('cors')
const schema = require('./schema')

const PORT = 5000;

const app = express()
app.use(cors());
app.use(express.json());
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();