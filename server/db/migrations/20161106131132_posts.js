'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.dropTableIfExists(`posts`).then(() => {
    return knex.schema.createTable(`posts`, table => {
      table.increments()
      table.integer(`user_id`).references(`users.id`).notNullable().onDelete(`cascade`).index()
      table.string(`title`).notNullable()
      table.integer(`votes`).notNullable()
      table.text(`content`).notNullable()
      table.string(`photo_url`).notNullable()
      table.timestamps(true, true)
    })
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`posts`)
}
