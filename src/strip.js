// @ts-check

'use strict'

import { STRIP_RX } from './constants.js'

/**
 * Strips all color tags from a string.
 *
 * @param {string} string
 * @returns {string}
 */
export function strip (string) {
  return string.replace(STRIP_RX, '')
}
