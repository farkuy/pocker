import {Time_DB_HOST, Time_DB_NAME, Time_DB_PASSWORD, Time_DB_PORT, Time_DB_USER} from "./time";

const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    Time_DB_NAME,
    Time_DB_USER,
    Time_DB_PASSWORD,
    {
        dialect: 'postgres',
        host: Time_DB_HOST,
        port: Time_DB_PORT
    }
)