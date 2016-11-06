'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.dropTableIfExists(`users`).then(() => {
    return knex.schema.createTable(`users`, table => {
      table.increments()
      table.string(`username`).notNullable().unique().index()
      table.string(`hashed_pass`).notNullable()
      table.timestamps(true, true)
    })
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`users`)
}
