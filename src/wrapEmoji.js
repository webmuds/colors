// @ts-check

'use strict'

import emojiRegex from 'emoji-regex'

/**
 * RegExp to wrap all emoji in <span> tags.
 */
const EMOJI_RX = emojiRegexPattern()

/**
 * Template to use when replacing emoji.
 * (wmE = WebMUDs Emoji)
 */
const EMOJI_REPLACEMENT_TEMPLATE = '<span class="wmE">$1</span>'

/**
 * Wraps all emoji in a custom <span> tag.
 *
 * @param {string} text
 * @return {string}
 */
export function wrapEmoji (text) {
  return text.replace(EMOJI_RX, EMOJI_REPLACEMENT_TEMPLATE)
}

/**
 * Helper that extracts the RegExp from emoji-regex
 * and returns a new RegExp with capture enabled.
 */
function emojiRegexPattern () {
  const patternFromLib = emojiRegex().toString()
  const lastSlashIndex = patternFromLib.lastIndexOf('/')
  const pattern = patternFromLib.slice(1, lastSlashIndex)
  const flags = patternFromLib.slice(lastSlashIndex + 1)

  return new RegExp(`((?:${pattern})+)`, flags)
}
