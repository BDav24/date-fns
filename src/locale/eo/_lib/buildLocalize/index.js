import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'
import localizeDistanceInWords from './distanceInWords/index.js'

var weekdays = {
  narrow: ['di', 'lu', 'ma', 'me', 'ĵa', 've', 'sa'],
  short: ['dim', 'lun', 'mar', 'mer', 'ĵaŭ', 'ven', 'sab'],
  long: ['dimanĉo', 'lundo', 'mardo', 'merkredo', 'ĵaŭdo', 'vendredo', 'sabato']
}

var months = {
  short: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aŭg', 'sep', 'okt', 'nov', 'dec'],
  long: ['januaro', 'februaro', 'marto', 'aprilo', 'majo', 'junio', 'julio', 'aŭgusto', 'septembro', 'oktobro', 'novembro', 'decembro']
}

var timesOfDay = {
  uppercase: ['A.T.M.', 'P.T.M.'],
  lowercase: ['a.t.m.', 'p.t.m.'],
  long: ['antaŭtagmeze', 'posttagmeze']
}

function ordinalNumber (dirtyNumber) {
  var number = Number(dirtyNumber)
  return number + '-a'
}

function setTimeOfDay (hours, value) {
  var isAM = value === 0

  if (isAM) {
    if (hours === 12) {
      return 0
    }
  } else {
    if (hours !== 12) {
      return 12 + hours
    }
  }

  return hours
}

export default function buildLocalize () {
  return {
    ordinalNumber: ordinalNumber,
    weekday: buildLocalizeFn(weekdays, 'long'),
    weekdays: buildLocalizeArrayFn(weekdays, 'long'),
    month: buildLocalizeFn(months, 'long'),
    months: buildLocalizeArrayFn(months, 'long'),
    timeOfDay: buildLocalizeFn(timesOfDay, 'long', function (hours) {
      return (hours / 12) >= 1 ? 1 : 0
    }),
    timesOfDay: buildLocalizeArrayFn(timesOfDay, 'long'),
    distanceInWords: localizeDistanceInWords,
    setTimeOfDay: setTimeOfDay
  }
}
