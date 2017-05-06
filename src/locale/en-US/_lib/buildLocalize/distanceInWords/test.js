// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import localizeDistanceInWords from '.'

describe('en-US locale > localizeDistanceInWords', function () {
  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('lessThanXSeconds', 1) === 'less than a second')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('lessThanXSeconds', 2) === 'less than 2 seconds')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xSeconds', 1) === '1 second')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xSeconds', 2) === '2 seconds')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(localizeDistanceInWords('halfAMinute') === 'half a minute')
    })

    it('ignores the second argument', function () {
      assert(localizeDistanceInWords('halfAMinute', 123) === 'half a minute')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('lessThanXMinutes', 1) === 'less than a minute')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('lessThanXMinutes', 2) === 'less than 2 minutes')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xMinutes', 1) === '1 minute')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xMinutes', 2) === '2 minutes')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('aboutXHours', 1) === 'about 1 hour')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('aboutXHours', 2) === 'about 2 hours')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xHours', 1) === '1 hour')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xHours', 2) === '2 hours')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xDays', 1) === '1 day')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xDays', 2) === '2 days')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('aboutXMonths', 1) === 'about 1 month')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('aboutXMonths', 2) === 'about 2 months')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xMonths', 1) === '1 month')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xMonths', 2) === '2 months')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('aboutXYears', 1) === 'about 1 year')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('aboutXYears', 2) === 'about 2 years')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xYears', 1) === '1 year')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xYears', 2) === '2 years')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('overXYears', 1) === 'over 1 year')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('overXYears', 2) === 'over 2 years')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('almostXYears', 1) === 'almost 1 year')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('almostXYears', 2) === 'almost 2 years')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `ago` to a string', function () {
      var result = localizeDistanceInWords('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'about 1 year ago')
    })
  })

  context('with a future suffix', function () {
    it('adds `in` to a string', function () {
      var result = localizeDistanceInWords('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'in half a minute')
    })
  })
})
