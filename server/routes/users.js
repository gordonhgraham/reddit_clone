'use strict'

const express = require(`express`)
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
    .then(data => {
      if (data.length === 0) {
        knex(`users`)
          .insert({
            username: newUser.username,
            hashed_pass: hashed_pass
          }, `*`)
          .then(addedUser => {
            const user = addedUser

            delete user.hashed_pass
            req.session.user = user

            res.send(`User signup success.`)
          })
          .catch(err => { return next(err) })
      } else {
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
      } else {
        console.log(`login unsuccessful`)
        res.send(`Incorrect Username or Password`)
      }
    })
    .catch(err => { return next(err) })
})

// user logout ---maybe client side only?
router.get(`/logout`, (req, res, next) => {
  req.session = null
  res.send(`Logout success.`)
})

// // user edit
// router.post(`/edituser`, (req, res, next) => {
//   const user = req.body
//
//   knex(`users`)
//     .where(`username`, user.username)
// })
//
// // user delete ---maybe client side only? RESTful?
// router.delete(`/deleteuser`, (req, res, next) => {
//
// })

module.exports = router
