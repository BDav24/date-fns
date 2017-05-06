// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import locale from '.'

import differenceInCalendarWeeks from '../../differenceInCalendarWeeks'
import distanceInWords from '../../distanceInWords'
import distanceInWordsStrict from '../../distanceInWordsStrict'
import endOfWeek from '../../endOfWeek'
import format from '../../format'
import isSameWeek from '../../isSameWeek'
import lastDayOfWeek from '../../lastDayOfWeek'
import parse from '../../parse'
import setDay from '../../setDay'
import startOfWeek from '../../startOfWeek'

describe('ru locale', function () {
  context('with `differenceInCalendarWeeks`', function () {
    it('sets the first day of the week', function () {
      var result = differenceInCalendarWeeks(
        new Date(2014, 5 /* Jun */, 29, 6, 0),
        new Date(2014, 6 /* Jul */, 8, 18, 0),
        {locale: locale}
      )
      assert(result === 2)
    })
  })

  context('with `distanceInWords`', function () {
    it('works as expected', function () {
      var result = distanceInWords(
        new Date(1986, 3, 4, 10, 32, 25),
        new Date(1986, 3, 4, 10, 32, 0),
        {locale: locale, includeSeconds: true}
      )
      assert(result === 'полминуты')
    })

    context('when `addSuffix` option is true', function () {
      it('adds a past suffix', function () {
        var result = distanceInWords(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, includeSeconds: true, addSuffix: true}
        )
        assert(result === 'меньше 10 секунд назад')
      })

      it('adds a future suffix', function () {
        var result = distanceInWords(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'приблизительно через 1 час')
      })
    })
  })

  context('with `distanceInWordsStrict`', function () {
    it('works as expected', function () {
      var result = distanceInWordsStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 12, 32, 0),
        {locale: locale, unit: 'm'}
      )
      assert(result === '120 минут')
    })

    describe('when `addSuffix` option is true', function () {
      it('adds a past suffix', function () {
        var result = distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === '25 секунд назад')
      })

      it('adds a future suffix', function () {
        var result = distanceInWordsStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          {locale: locale, addSuffix: true}
        )
        assert(result === 'через 1 час')
      })
    })
  })

  context('with `endOfWeek`', function () {
    it('sets the first day of the week', function () {
      var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
      var result = endOfWeek(date, {locale: locale})
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999))
    })
  })

  context('with `format`', function () {
    var date = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    describe('months', function () {
      it('Mo', function () {
        var result = format(date, 'Mo [месяц]', {locale: locale})
        assert(result === '4-й месяц')
      })

      it('MMM', function () {
        var result = format(date, 'MMM', {locale: locale})
        assert(result === 'апр.')
      })

      it('MMMM', function () {
        var result = format(date, 'MMMM', {locale: locale})
        assert(result === 'апрель')
      })
    })

    describe('quarters', function () {
      it('Qo', function () {
        var result = format(date, 'Qo [квартал]', {locale: locale})
        assert(result === '2-й квартал')
      })
    })

    describe('days of month', function () {
      it('Do', function () {
        var result = format(date, 'Do MMMM YYYY', {locale: locale})
        assert(result === '4-е апреля 1986')
      })
    })

    describe('days of year', function () {
      it('DDDo', function () {
        var result = format(new Date(1992, 0 /* Jan */, 1), 'DDDo [день года]', {locale: locale})
        assert(result === '1-й день года')
      })
    })

    describe('days of week', function () {
      it('all variants', function () {
        var result = format(date, 'do [день недели,] dd ddd dddd', {locale: locale})
        assert(result === '5-й день недели, пт птн пятница')
      })
    })

    describe('ISO weeks', function () {
      it('Wo', function () {
        var result = format(date, 'Wo [неделя]', {locale: locale})
        assert(result === '14-я неделя')
      })
    })

    describe('hours and am/pm', function () {
      it('12 pm', function () {
        var date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        var result = format(date, 'hh:mm a', {locale: locale})
        assert(result === '12:00 дня')
      })

      it('12 am', function () {
        var date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        var result = format(date, 'h:mm a', {locale: locale})
        assert(result === '12:00 ночи')
      })

      it('a', function () {
        var result = []
        for (var i = 0; i <= 23; i++) {
          result.push(format(new Date(2015, 0, 1, i), 'h a', {locale: locale}))
        }
        var expected = [
          '12 ночи', '1 ночи', '2 ночи', '3 ночи',
          '4 утра', '5 утра', '6 утра', '7 утра', '8 утра', '9 утра', '10 утра', '11 утра',
          '12 дня', '1 дня', '2 дня', '3 дня', '4 дня',
          '5 вечера', '6 вечера', '7 вечера', '8 вечера', '9 вечера', '10 вечера', '11 вечера'
        ]
        assert.deepEqual(result, expected)
      })

      it('A', function () {
        var result = []
        for (var i = 0; i <= 23; i++) {
          result.push(format(new Date(2015, 0, 1, i), 'h A', {locale: locale}))
        }
        var expected = [
          '12 ночи', '1 ночи', '2 ночи', '3 ночи',
          '4 утра', '5 утра', '6 утра', '7 утра', '8 утра', '9 утра', '10 утра', '11 утра',
          '12 дня', '1 дня', '2 дня', '3 дня', '4 дня',
          '5 вечера', '6 вечера', '7 вечера', '8 вечера', '9 вечера', '10 вечера', '11 вечера'
        ]
        assert.deepEqual(result, expected)
      })

      it('aa', function () {
        var result = []
        for (var i = 0; i <= 23; i++) {
          result.push(format(new Date(2015, 0, 1, i), 'h aa', {locale: locale}))
        }
        var expected = [
          '12 ночи', '1 ночи', '2 ночи', '3 ночи',
          '4 утра', '5 утра', '6 утра', '7 утра', '8 утра', '9 утра', '10 утра', '11 утра',
          '12 дня', '1 дня', '2 дня', '3 дня', '4 дня',
          '5 вечера', '6 вечера', '7 вечера', '8 вечера', '9 вечера', '10 вечера', '11 вечера'
        ]
        assert.deepEqual(result, expected)
      })
    })
  })

  context('with `isSameWeek`', function () {
    it('sets the first day of the week', function () {
      var result = isSameWeek(
        new Date(2014, 7 /* Aug */, 31),
        new Date(2014, 8 /* Sep */, 4),
        {locale: locale}
      )
      assert(result === false)
    })
  })

  context('with `lastDayOfWeek`', function () {
    it('sets the first day of the week', function () {
      var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
      var result = lastDayOfWeek(date, {locale: locale})
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 7))
    })
  })

  context('with `parse`', function () {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)

    it('sets the first day of the week', function () {
      var result = parse('0', 'd', baseDate, {locale: locale})
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 6))
    })

    describe('quarters', function () {
      it('Qo', function () {
        var result = parse('2000 2-й', 'YYYY Qo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2000, 3 /* Apr */, 1))
      })
    })

    describe('months', function () {
      it('Mo', function () {
        var result = parse('2014 12-й', 'YYYY Mo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2014, 11 /* Dec */, 1))
      })

      it('MMM', function () {
        var result = parse('2016 ноя', 'YYYY MMM', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 1))
      })

      it('MMMM', function () {
        var result = parse('2016 декабрь', 'YYYY MMMM', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 11 /* Dec */, 1))
      })
    })

    describe('ISO weeks', function () {
      it('Wo', function () {
        var result = parse('2016 3-я', 'GGGG Wo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 18))
      })
    })

    describe('days of week', function () {
      it('do', function () {
        var result = parse('2016 4 0-й', 'GGGG W do', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 31))
      })

      it('dd', function () {
        var result = parse('2016 4 пн', 'GGGG W dd', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 25))
      })

      it('ddd', function () {
        var result = parse('2016 4 срд', 'GGGG W ddd', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 27))
      })

      it('dddd', function () {
        var result = parse('2016 4 пятница', 'GGGG W dddd', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 0 /* Jan */, 29))
      })
    })

    describe('days of month', function () {
      it('Do', function () {
        var result = parse('2016 11 15-е', 'YYYY MM Do', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 15))
      })
    })

    describe('days of year', function () {
      it('DDDo', function () {
        var result = parse('2016 100-й', 'YYYY DDDo', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 3 /* Apr */, 9))
      })
    })

    describe('a.m./p.m.', function () {
      it('12 a.m.', function () {
        var result = parse('2016-11-25 12 ночи', 'YYYY-MM-DD h aa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 0, 0, 0, 0))
      })

      it('12 p.m.', function () {
        var result = parse('2016-11-25 12 дня', 'YYYY-MM-DD h aa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 12, 0, 0, 0))
      })

      it('night', function () {
        var result = parse('2016-11-25 3 ночи', 'YYYY-MM-DD h a', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 3, 0, 0, 0))
      })

      it('morning', function () {
        var result = parse('2016-11-25 8 утра', 'YYYY-MM-DD h A', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 8, 0, 0, 0))
      })

      it('afternoon', function () {
        var result = parse('2016-11-25 2 дня', 'YYYY-MM-DD h a', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 14, 0, 0, 0))
      })

      it('evening', function () {
        var result = parse('2016-11-25 10 вечера', 'YYYY-MM-DD h aa', baseDate, {locale: locale})
        assert.deepEqual(result, new Date(2016, 10 /* Nov */, 25, 22, 0, 0, 0))
      })
    })
  })

  context('with `setDay`', function () {
    it('sets the first day of the week', function () {
      var result = setDay(new Date(2014, 8 /* Sep */, 1), 0, {locale: locale})
      assert.deepEqual(result, new Date(2014, 8 /* sep */, 7))
    })
  })

  context('with `startOfWeek`', function () {
    it('sets the first day of the week', function () {
      var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
      var result = startOfWeek(date, {locale: locale})
      assert.deepEqual(result, new Date(2014, 8 /* Sep */, 1))
    })
  })
})
