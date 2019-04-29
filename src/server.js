const express = require('express')
const nunjucks = require('nunjucks')
const PORT = process.env.PORT || 3333

const app = express()

nunjucks.configure('src/views', {
  autoescape: true,
  express: app,
  watch: true
})

app.set('view engine', 'njk')
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

app.listen(PORT)
