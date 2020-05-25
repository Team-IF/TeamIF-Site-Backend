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
  update: (id, data) => {
    return knex("member").where("id", id).update(data);
  },
  delete: (id) => {
    return knex("member").where("id", id).del();
  },
};
