const jwt = require('jsonwebtoken')

const generateDiscordToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_DISCORD_SECRET, {
    expiresIn: '7d',
  })
}

module.exports = generateDiscordToken
