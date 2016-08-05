var fs = require('fs')
var path = require('path')
var verify = require('adventure-verify')

exports.problem = fs.createReadStream(__dirname + '/problem.txt')
exports.solution = fs.createReadStream(__dirname + '/solution.txt')

exports.verify = verify({ modeReset: true }, function (args, t) {
  console.log(`Current directory: ${process.cwd()}`);

  // test for solc install
  try {
    fs.statSync(`${process.cwd()}/node_modules/solc`)
  } catch (err) {
    t.ifErr(err)
  }
  t.end()

})