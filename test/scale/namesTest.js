var vows = require('vows')
var assert = require('assert')
var names = require('../../lib/scale/names')

vows.describe('scale/names').addBatch({
  'all scale names': function () {
    // no alias
    assert.equal(names().length, 108)
    assert.equal(names(true).length, 89)

    // from scales.json
    assert(names().indexOf('major') > 0)
    assert(names(true).indexOf('major') > 0)

    // from aliases.json
    assert(names().indexOf('kumoi') > 0)
    assert(names(true).indexOf('kumoi') < 1)
  }
}).export(module)
