/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('user', (table) => {
    table.string('username', 255).unique().notNullable().alter();
    table.string('email', 255).unique().notNullable().alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('user', (table) => {
    table.string('username', 255).notNullable().alter();
    table.string('email', 255).notNullable().alter();
  });
};
