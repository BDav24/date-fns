// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var isWithinRange = require('./')

describe('isWithinRange', function () {
  it('returns true if the given date in within the given range', function () {
    var result = isWithinRange(
      new Date(2014, 9 /* Oct */, 31),
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 11 /* Dec */, 31)
    )
    assert(result === true)
  })

  it('returns true if the given date has same time as the left boundary of the range', function () {
    var result = isWithinRange(
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 11 /* Dec */, 31)
    )
    assert(result === true)
  })

  it('returns true if the given date has same time as the right boundary of the range', function () {
    var result = isWithinRange(
      new Date(2014, 11 /* Dec */, 31),
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 11 /* Dec */, 31)
    )
    assert(result === true)
  })

  it('returns true if the given date and the both boundaries are the same', function () {
    var result = isWithinRange(
      new Date(2014, 11 /* Dec */, 31),
      new Date(2014, 11 /* Dec */, 31),
      new Date(2014, 11 /* Dec */, 31)
    )
    assert(result === true)
  })

  it('returns false if the given date is outside of the range', function () {
    var result = isWithinRange(
      new Date(2014, 1 /* Feb */, 11),
      new Date(2014, 8 /* Sep */, 1),
      new Date(2014, 11 /* Dec */, 31)
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isWithinRange(
      new Date(2014, 9 /* Oct */, 31).toISOString(),
      new Date(2014, 8 /* Sep */, 1).toISOString(),
      new Date(2014, 11 /* Dec */, 31).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isWithinRange(
      new Date(2014, 9 /* Oct */, 31).getTime(),
      new Date(2014, 8 /* Sep */, 1).getTime(),
      new Date(2014, 11 /* Dec */, 31).getTime()
    )
    assert(result === true)
  })

  it('throws an exception if the start date is after the end date', function () {
    var block = isWithinRange.bind(
      null,
      new Date(2014, 9 /* Oct */, 31),
      new Date(2014, 11 /* Dec */, 31),
      new Date(2014, 8 /* Sep */, 1)
    )
    assert.throws(block)
  })
})
