'use strict'

const express = require('express')
const router = express.Router()
const knex = require(`../db/knex.js`)
const bcrypt = require(`bcrypt`)

// user signup
router.post(`/signup`, (req, res, next) => {
  const newUser = req.body
  const hashed_pass = bcrypt.hashSync(newUser.password, 12)

  // check if username is unique, if so insert new users
  knex(`users`)
    .where(`username`, newUser.username)
    .first()
    .then(data => {
      if (!data) {
        knex(`users`)
          .insert({
            username: newUser.username,
            hashed_pass: hashed_pass
          })
          .returning(`*`)
          .first()
          .then(data => {
            const user = data
            delete user.hashed_pass
            req.session.user = user
            console.log(`req.session`, req.session.user)
            res.send(`User signup success.`)
          })
          .catch(err => { return next(err) })
      }
      else {
        res.send(`Username already exists, pick a new username.`)
      }
    })
})

// user login
router.post(`/login`, (req, res, next) => {
  const user = req.body
  knex(`users`)
    .where(`username`, user.username)
    .first()
    .then(data => {
      const auth = bcrypt.compareSync(user.password, data.hashed_pass)

      if (auth) {
        const user = data
        delete user.hashed_pass
        req.session.user = user
        console.log(`login success`)
        res.send(`Login success.`)
      }
      else {
        console.log(`login unsuccessful`)
        res.send(`Incorrect Username or Password`)
      }
    })
    .catch(err => { return next(err) })
})

// // user logout ---maybe client side only?
// router.post(`/logout`, (req, res, next) => {
//
// })
//
// // user edit
// router.post(`/edituser`, (req, res, next) => {
//
// })
//
// // user delete ---maybe client side only? RESTful?
// router.delete(`/deleteuser`, (req, res, next) => {
//
// })

module.exports = router
