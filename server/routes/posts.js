'use strict'

const express = require(`express`)
const router = express.Router()
const knex = require(`../db/knex.js`)

// list posts
router.get(`/`, (req, res, next) => {
  knex(`posts`)
    .innerJoin(`users`, `posts.user_id`, `users.id`)
    .select(`users.username`, `users.id`, `posts.id`, `posts.user_id`,
      `posts.title`, `posts.votes`, `posts.content`, `posts.photo_url`,
      `posts.created_at`)
    .then(data => {
      res.send(data)
    })
    .catch(err => { return next(err) })
})

// read post
router.get(`/:id`, (req, res, next) => {
  const postId = req.params.id

  knex(`posts`)
    .where(`id`, postId)
    .innerJoin(`users`, `posts.user_id`, `users.id`)
    .select(`users.username`, `users.id`, `posts.id`, `posts.user_id`,
      `posts.title`, `posts.votes`, `posts.content`, `posts.photo_url`,
      `posts.created_at`)
    .then(data => {
      res.send(data)
    })
    .catch(err => { return next(err) })
})

// create post
router.post(`/`, (req, res, next) => {
  if (req.session.user) {
    knex(`posts`)
      .insert({
        user_id: req.session.user.id,
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
    res.send(`Unauthorized.`)
  }
})

// update post
router.patch(`/`, (req, res, next) => {
  const userId = req.session.user.id

  knex(`posts`)
    .where(`id`, req.body.id)
    .then(data => {
      const authorId = data[0].user_id

      if (userId === authorId) {
        knex(`posts`)
          .where(`id`, req.body.id)
          .update(req.body, `*`)
          .then(data => {
            res.send(data[0])
          })
      } else {
        res.send(`Unauthorized.`)
      }
    })
    .catch(err => { return next(err) })
})

// delete post
router.delete(`/`, (req, res, next) => {
  const userId = req.session.user.id

  knex(`posts`)
    .where(`id`, req.body.id)
    .then(data => {
      const authorId = data[0].user_id

      if (userId === authorId) {
        knex(`posts`)
          .where(`id`, req.body.id)
          .del()
          .then(() => {
            res.send(`Post Deleted.`)
          })
      } else {
        res.send(`Unauthorized.`)
      }
    })
    .catch(err => { return next(err) })
})

module.exports = router
