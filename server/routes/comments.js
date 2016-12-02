'use strict'

const express = require(`express`)
const router = express.Router({ mergeParams: true })
const knex = require(`../db/knex.js`)

// list comments
router.get(`/`, (req, res, next) => {
  knex(`comments`)
    .where(`post_id`, req.params.pid)
    .innerJoin(`users`, `users.id`, `comments.user_id`)
    .select([`comments.id`, `users.name`, `post_id`, `body`])
    .orderBy(`comments.created_at`, `asc`)
    .then(comments => {
      res.send(comments)
    })
    .catch(err => { return next(err) })

  // get all comments for a specific post
})

// create comment
router.post(`/`, (req, res, next) => {
  // add new comment for specific post
})

// update comment
router.patch(`/:cid`, (req, res, next) => {
  // update specific comment for specific post
})

// delete comment
router.delete(`/:cid`, (req, res, next) => {
  // delete specific comment from specific post
})

module.exports = router
