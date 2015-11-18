const defaults = {
  port: process.env.PORT || 3000
}

let env;
try {
  env = require(`./${process.env}`)
} catch (e) {
  env = require(`./development`)
}

module.exports = Object.assign({}, defaults, env)
