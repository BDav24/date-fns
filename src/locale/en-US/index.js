import buildLocalize from './_lib/buildLocalize/index.js'
import buildMatch from './_lib/buildMatch/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale.
 */
var locale = {
  localize: buildLocalize(),
  match: buildMatch(),
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContains: 6 /* Saturday */
  }
}

export default locale
