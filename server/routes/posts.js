'use strict'

const express = require('express')
const router = express.Router()
const knex = require(`../db/knex.js`)

// list posts
router.get('/', (req, res, next) => {
  knex(`posts`)
    .innerJoin(`users`, `posts.user_id`, `users.id`)
    .select(`users.username`, `users.id`, `posts.id`,`posts.user_id`,
      `posts.title`, `posts.votes`, `posts.content`, `posts.photo_url`,
      `posts.created_at`)
    .then(data => {
      res.send(data)
    })
    .catch(err => { return next(err) })
})

// create post
router.post('/', (req, res, next) => {
  console.log(req.session);
  if (req.session) {
    console.log(`req.session is true`)
    knex(`posts`)
      .insert({
        user_id: req.session.id,
        title: req.body.title,
        votes: req.body.votes,
        content: req.body.content,
        photo_url: req.body.photo_url
      }, `*`)
      .then(data => {
        res.send(data)
      })
      .catch(err => { return next(err) })
  } else {
    console.log(`Unauthorized`);
    res.send(`Unauthorized.`)
  }
})

// update post
router.patch('/', (req, res, next) => {
  knex(`posts`)
    .where(`id`, req.body.id)
    .update(req.body, `*`)
    .then(data => {
      res.send(data)
    })
    .catch(err => { return next(err) })
})

// delete post
router.delete('/', (req, res, next) => {
  knex(`posts`)
    .where(`id`, req.body.id)
    .del()
    .then(() => {
      res.send(`Post Deleted.`)
    })
    .catch(err => { return next(err) })
})

module.exports = router
