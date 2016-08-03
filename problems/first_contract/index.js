var fs = require('fs')
var path = require('path')
var verify = require('adventure-verify')

exports.problem = fs.createReadStream(__dirname + '/problem.txt')
exports.solution = fs.createReadStream(__dirname + '/solution.txt')

exports.verify = verify({ modeReset: true }, function (args, t) {
  var result = require(path.resolve(args[0]))
  t.ok(result && result.contracts, 'you exported a compiled contract')

  var contracts = result.contracts || {}
  var contractAbi = JSON.parse(contracts.RoboBro.interface)
  var helloMethod = contractAbi.find((method) => method.name === 'hello')
  t.ok(helloMethod, 'contract "RoboBro" has a method named "hello"')

  t.equal(helloMethod.outputs.length, 1, 'contract "RoboBro" method "hello" has one return value')
  t.equal(helloMethod.outputs[0].type, 'string', 'contract "RoboBro" method "hello" has return type "string"')

  t.end()
})