require('dotenv').config()

const knex = require('knex')({
    client:'pg',
    connection:{
        host:'localhost',
        port:5432,
        password:'88274297A',
        user:'postgres',
        database:'hotelaria'
    }

});

module.exports = knex