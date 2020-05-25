const knex = require("./knex");

module.exports = {
  getAll: () => {
    return knex("member");
  },
  getOne: (id) => {
    return knex("member").where("id", id);
  },
};
