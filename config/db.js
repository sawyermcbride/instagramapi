let options = {};

const pgb = require('pg-promise')(options);
const connectionString = 'postgres://postgres:Mariner166$!@localhost:5432/instagramapi';
const db = pgb(connectionString);

// console.log(db)

module.exports = db;