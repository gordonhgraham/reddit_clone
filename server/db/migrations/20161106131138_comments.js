'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.dropTableIfExists(`comments`).then(() => {
    return knex.schema.createTable(`comments`, table => {
      table.increments()
      table.integer(`post_id`).references(`posts.id`).notNullable().onDelete(`cascade`).index()
      table.integer(`user_id`).references(`users.id`).notNullable().onDelete(`cascade`).index()
      table.text(`content`).notNullable()
      table.timestamps(true, true)
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`comments`)
};
