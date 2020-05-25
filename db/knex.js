const { db } = require("./../config");

module.exports = require("knex")({
  client: "mysql",
  connection: {
    host: db.url,
    user: db.username,
    password: db.password,
    database: db.dbname,
  },
});
