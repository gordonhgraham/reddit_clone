
exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(() => {
      return Promise.all([
        knex('comments ').insert({post_id: 1, user_id: 1, content: `This is the first comment on the first post.`}),
        knex('comments ').insert({post_id: 1, user_id: 1, content: `This is the second comment on the first post.`}),
        knex('comments ').insert({post_id: 1, user_id: 1, content: `This is the third comment on the first post.`}),
        knex('comments ').insert({post_id: 2, user_id: 1, content: `This is the first comment on the second post.`}),
        knex('comments ').insert({post_id: 2, user_id: 1, content: `This is the second comment on the second post.`}),
        knex('comments ').insert({post_id: 2, user_id: 1, content: `This is the third comment on the second post.`}),
        knex('comments ').insert({post_id: 3, user_id: 1, content: `This is the first comment on the third post.`}),
        knex('comments ').insert({post_id: 3, user_id: 1, content: `This is the second comment on the third post.`})
      ])
    })
}
