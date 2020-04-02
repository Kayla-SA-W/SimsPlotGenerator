'use strict'
const showRandomChallenge = require('./../templates/challenge.handlebars')

const onGetChallengesSuccess = (response) => {
  $('.challenges').show()
  const challenges = response.challenges // put the challenges array from the reponse into a new challenges array
  const length = challenges.length - 1 // save the length of the array minus 1 as 'length'
  const challenge = challenges[Math.floor(Math.random() * length)] // find a random challenge inside the challenges array
  const showChallenge = showRandomChallenge({ challenge: challenge })
  $('.challengeBox').html(showChallenge)
  // if (challenge.link === '100 baby challenge') {
  //   $('.giphy').html("<img src='./../../public/100babychallenge.gif' alt='100 baby challenge'>")
  // } else {
  //   $('.giphy').html("<img src='./../../public/plumbob.gif' alt='plumbob'>")
  // }
}

const onGetChallengesFailure = (response) => {
  console.log('couldnt get all challenges')
}

module.exports = {
  onGetChallengesSuccess,
  onGetChallengesFailure
}
