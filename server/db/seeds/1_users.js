`use strict`

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(() => {
      return Promise.all([
        knex('users').insert({username: 'gordon', hashed_pass: `test`})
      ])
    })
}
