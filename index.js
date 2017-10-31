const TreeProgram = require("treeprogram")
const fs = require("fs")
const packGrammar = fs.readFileSync(__dirname + "/pack.grammar", "utf8")

class packProgram extends TreeProgram {
  getGrammarString() {
    return packGrammar
  }

  getGrammarFilePath() {
    return __dirname + "/pack.grammar"
  }

  compile() {
    return this.toJson()
  }
}

module.exports = packProgram
