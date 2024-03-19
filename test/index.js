// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { html, strip, wrapEmoji } from '../index.js'
import { html as htmlFromSrc, wrapEmoji as wrapEmojiFromSrc } from '../src/html.js'
import { strip as stripFromSrc } from '../src/strip.js'

describe('main require', function () {
  it('exports html from src', function () {
    expect(html).to.equal(htmlFromSrc)
  })

  it('exports strip from src', function () {
    expect(strip).to.equal(stripFromSrc)
  })

  it('exports wrapEmoji from src', function () {
    expect(wrapEmoji).to.equal(wrapEmojiFromSrc)
  })
})
