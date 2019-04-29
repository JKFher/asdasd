const express = require('express')
const routes = express.Router()

const checkQuery = (req, res, next) => {
  const ageQuery = req.query.age
  if (!ageQuery || isNaN(ageQuery)) {
    return res.redirect('/')
  } else {
    next()
  }
}

routes.get('/', (req, res) => res.render('form'))

routes.post('/check', (req, res) => {
  const age = parseInt(req.body.age)
  const majorAge = 18

  age >= majorAge ? res.redirect(`/major?age=${age}`) : res.redirect(`/minor?age=${age}`)
})

routes.get('/major', checkQuery, (req, res) => {
  const age = req.query.age

  return res.render('major', { age })
})

routes.get('/minor', checkQuery, (req, res) => {
  const age = req.query.age

  return res.render('major', { age })
})

module.exports = routes
