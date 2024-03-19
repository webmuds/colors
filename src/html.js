// @ts-check

'use strict'

import { COLOR_RX, HTML_REPLACEMENT_TEMPLATE, EMOJI_RX, EMOJI_REPLACEMENT_TEMPLATE } from './constants.js'
import escapeHtml from 'escape-html'

/**
 * Converts color tags into HTML tags.
 *
 * @param {string} text
 * @param {boolean} escape - when `false`, will not escape HTML before parsing. Defaults to `true`.
 * @return {string}
 */
export function html (text, escape = true) {
  var escapedText
  if (escape) {
    escapedText = escapeHtml(text)
  } else {
    escapedText = text
  }
  return escapedText.replace(COLOR_RX, HTML_REPLACEMENT_TEMPLATE)
}

/**
 * Wraps all emoji in a custom <span> tag.
 */
export function wrapEmoji (text) {
  return text.replace(EMOJI_RX, EMOJI_REPLACEMENT_TEMPLATE)
}
