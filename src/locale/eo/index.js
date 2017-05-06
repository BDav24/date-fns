import buildLocalize from './_lib/buildLocalize/index.js'
import buildMatch from './_lib/buildMatch/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Esperanto locale.
 */
var locale = {
  localize: buildLocalize(),
  match: buildMatch(),
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContains: 4 /* Thursday */
  }
}

export default locale
