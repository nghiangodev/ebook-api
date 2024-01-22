const pgp = require('pg-promise')();
const connectionString = 'postgresql://postgres:Nghia2901@localhost:5433/Ebook';
const db = pgp(connectionString);

module.exports = db;