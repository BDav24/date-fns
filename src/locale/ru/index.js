import buildLocalize from './_lib/buildLocalize/index.js'
import buildFormatters from './_lib/buildFormatters/index.js'
import buildMatch from './_lib/buildMatch/index.js'
import buildTokensRegExp from '../_lib/buildTokensRegExp/index.js'

var formatters = buildFormatters()

/**
 * @type {Locale}
 * @category Locales
 * @summary Russian locale.
 */
var locale = {
  localize: buildLocalize(),
  formatters: formatters,
  formattingTokensRegExp: buildTokensRegExp(formatters),
  match: buildMatch(),
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContains: 4 /* Thursday */
  }
}

export default locale
