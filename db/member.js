const knex = require("./knex");

module.exports = {
  getAll: () => {
    return knex("member");
  },
  getOne: (id) => {
    return knex("member").where("id", id);
  },
  create: (data) => {
    return knex("member").insert(data).returning("*");
  },
  update: (data) => {
    return knex("member").update(data);
  },
  delete: (id) => {
    return knex("member").where("id", id).del();
  },
};
