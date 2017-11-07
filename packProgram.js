const otree = require("otree")
class packProgram extends otree.program {
  compile() {
    return this.toJson()
  }
}

module.exports = packProgram
