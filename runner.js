#!/usr/bin/env node

var adventure = require('adventure')
var shop = adventure('ethereum-solidity')

var problems = [
  // 'get_ready',
  'first_contract',
  'wowsers',
]

problems.forEach(function (prob) {
  shop.add(prob, function () { return require('./problems/' + prob) })
})

shop.execute(process.argv.slice(2))
