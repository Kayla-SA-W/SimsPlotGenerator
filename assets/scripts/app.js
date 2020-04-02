'use strict'

const challenges = require('./challenges/events.js')

$(() => {
  $('.challenges').hide()
  challenges.addHandlers()
})
