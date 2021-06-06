// @ts-check

'use strict'

/**
 * The full list of colors.
 */
export const COLORS = 'white|silver|gray|red|maroon|yellow|olive|lime|green|blue|navy|cyan|teal|purple|magenta|gold|orange|darkorange|orangered|brown|dimgray|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15'

/**
 * The template for the resulting replacement.
 * All class names in outputted HTML will be prefixed.
 * You can change the prefix here. If you do, remember to
 * also adjust the CSS file as well.
 */
export const HTML_REPLACEMENT_TEMPLATE = '<span class="wm$2">$3</span>'

/**
  * The main Regular Expression for performing replacements.
  */
export const COLOR_RX = new RegExp('({((?:' + COLORS + '))}((?:(?!{(' + COLORS + '|/)}).)*)({/})*)', 'gim')
