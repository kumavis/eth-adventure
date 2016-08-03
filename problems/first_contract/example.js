var solc = require('solc')
module.exports = solc.compile(`


  contract RoboBro {
    function hello() returns (string) {
      return 'haay wuurl';
    }
  }


`)