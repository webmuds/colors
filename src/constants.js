// @ts-check

'use strict'

/**
 * The full list of colors.
 * The resulting class name in HTML output will be prepended with "wm".
 */
export const COLORS = 'white|silver|gray|red|maroon|yellow|olive|lime|green|blue|navy|cyan|teal|purple|magenta|gold|orange|darkorange|orangered|brown|dimgray|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15'

/**
  * The main Regular Expression to perform HTML tag replacement.
  */
export const COLOR_RX = new RegExp('({((?:' + COLORS + '))}((?:(?!{(' + COLORS + '|/)}).)*)({/})*)', 'gim')
