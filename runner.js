#!/usr/bin/env node
var fs = require('fs-extra')
var adventure = require('adventure')
var shop = adventure('eth-adventure')

var problems = [
  'get_ready',
  'first_contract',
]

problems.forEach(function (prob) {
  shop.add(prob, function () { return require('./problems/' + prob) })
})

var args = process.argv.slice(2)
var verb = args[0]

// handle custom adventure verbs
switch (verb) {
  
  case 'g':
  case 'generate':
    var type = args[1]
    if (!type) {
      console.log(`
        Use this to generate files for solving the puzzles.
        Try "eth-adventure generate sol ./xyz.js"
      `)
      return
    }
    var targetPath = args[2]
    if (!targetPath) {
      console.log(`
        Please specify a path to generate the template into.
        Try "eth-adventure generate sol ./xyz.js"
      `)
      return
    }
    console.log(`generating template ${type} @ ${targetPath}`)
    fs.copySync(__dirname+`/templates/${type}.js`, targetPath, { clobber: false })
    return

  default:
    shop.execute(args)
    return
}
