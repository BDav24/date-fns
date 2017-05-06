// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import localizeDistanceInWords from '.'

describe('eo locale > localizeDistanceInWords', function () {
  describe('lessThanXSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('lessThanXSeconds', 1) === 'malpli ol sekundo')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('lessThanXSeconds', 2) === 'malpli ol 2 sekundoj')
      })
    })
  })

  describe('xSeconds', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xSeconds', 1) === '1 sekundo')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xSeconds', 2) === '2 sekundoj')
      })
    })
  })

  describe('halfAMinute', function () {
    it('returns a proper string', function () {
      assert(localizeDistanceInWords('halfAMinute') === 'duonminuto')
    })

    it('ignores the second argument', function () {
      assert(localizeDistanceInWords('halfAMinute', 123) === 'duonminuto')
    })
  })

  describe('lessThanXMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('lessThanXMinutes', 1) === 'malpli ol minuto')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('lessThanXMinutes', 2) === 'malpli ol 2 minutoj')
      })
    })
  })

  describe('xMinutes', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xMinutes', 1) === '1 minuto')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xMinutes', 2) === '2 minutoj')
      })
    })
  })

  describe('aboutXHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('aboutXHours', 1) === 'proksimume 1 horo')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('aboutXHours', 2) === 'proksimume 2 horoj')
      })
    })
  })

  describe('xHours', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xHours', 1) === '1 horo')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xHours', 2) === '2 horoj')
      })
    })
  })

  describe('xDays', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xDays', 1) === '1 tago')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xDays', 2) === '2 tagoj')
      })
    })
  })

  describe('aboutXMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('aboutXMonths', 1) === 'proksimume 1 monato')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('aboutXMonths', 2) === 'proksimume 2 monatoj')
      })
    })
  })

  describe('xMonths', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xMonths', 1) === '1 monato')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xMonths', 2) === '2 monatoj')
      })
    })
  })

  describe('aboutXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('aboutXYears', 1) === 'proksimume 1 jaro')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('aboutXYears', 2) === 'proksimume 2 jaroj')
      })
    })
  })

  describe('xYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xYears', 1) === '1 jaro')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('xYears', 2) === '2 jaroj')
      })
    })
  })

  describe('overXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('overXYears', 1) === 'pli ol 1 jaro')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('overXYears', 2) === 'pli ol 2 jaroj')
      })
    })
  })

  describe('almostXYears', function () {
    context('when the count equals 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('almostXYears', 1) === 'preskaŭ 1 jaro')
      })
    })

    context('when the count is more than 1', function () {
      it('returns a proper string', function () {
        assert(localizeDistanceInWords('almostXYears', 2) === 'preskaŭ 2 jaroj')
      })
    })
  })

  context('with a past suffix', function () {
    it('adds `antaŭ` to a string', function () {
      var result = localizeDistanceInWords('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'antaŭ proksimume 1 jaro')
    })
  })

  context('with a future suffix', function () {
    it('adds `post` to a string', function () {
      var result = localizeDistanceInWords('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'post duonminuto')
    })
  })
})
