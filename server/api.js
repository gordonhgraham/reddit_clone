'use strict'

const express = require(`express`)
const path = require(`path`)
const logger = require(`morgan`)
const cookieParser = require(`cookie-parser`)
const bodyParser = require(`body-parser`)
const cookieSession = require(`cookie-session`)

const users = require(`./routes/users`)
const posts = require(`./routes/posts`)
const comments = require(`./routes/comments`)

const app = express()

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(logger(`dev`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, `../client`)))

app.use(cookieSession({
  name: `rereddit`,
  secret: `pineapple_spaceship`
}))

app.use(`/users`, users)
app.use(`/posts`, posts)
app.use(`/comments`, comments)
app.use(`/posts/:pid/comments`, comments)

// app.use from craig's pirates code along--what does the express.static do?
// app.use('/javascripts', express.static(__dirname + "/../client/javascripts"));
// app.use('/stylesheets', express.static(__dirname + "/../client/stylesheets"));
// app.use('/views', express.static(__dirname + "/../client/views"));

app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `../client/views`, `index.html`))
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error(`Not Found`)

  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get(`env`) === `development`) {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render(`error`, {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render(`error`, {
    message: err.message,
    error: {}
  })
})

module.exports = app
