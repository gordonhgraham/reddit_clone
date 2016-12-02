'use strict'

exports.seed = function(knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        knex('posts').insert({user_id: 1, title: `Post 1`, votes: 1, content: `This is the first post.`, photo_url: `https://source.unsplash.com/random/300x201`}),
        knex('posts').insert({user_id: 1, title: `Post 2`, votes: 2, content: `This is the second post.`, photo_url: `https://source.unsplash.com/random/300x202`}),
        knex('posts').insert({user_id: 1, title: `Post 3`, votes: 3, content: `This is the third post.`, photo_url: `https://source.unsplash.com/random/300x203`})
      ])
    })
}
