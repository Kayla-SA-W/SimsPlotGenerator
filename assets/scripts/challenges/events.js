'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const showChallenges = () => {
  api.showAllChallenges()
    .then(ui.onGetChallengesSuccess)
    .catch(ui.onGetChallengesFailure)
}

const addHandlers = () => {
  $('.showChallenges').on('click', showChallenges)
}

module.exports = {
  addHandlers
}
