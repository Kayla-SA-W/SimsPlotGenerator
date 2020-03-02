'use strict'
const config = require('./../config.js')

const showAllChallenges = () => {
  return $.ajax({
    url: config.apiUrl + '/challenges',
    method: 'GET'
  })
}

module.exports = {
  showAllChallenges
}
