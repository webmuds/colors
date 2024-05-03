// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { wrapEmoji } from '../src/wrapEmoji.js'

describe('#wrapEmoji', function () {
  it('wraps unicode emoji', function () {
    expect(wrapEmoji('😅')).to.eq('<span class="wmE">😅</span>')
  })

  it('wraps non-unicode emoji', function () {
    expect(wrapEmoji('⚔')).to.eq('<span class="wmE">⚔</span>')
  })

  it('wraps unicode version of non-unicode emoji', function () {
    expect(wrapEmoji('⚔️')).to.eq('<span class="wmE">⚔️</span>')
  })

  it('does not affect non-emoji', function () {
    expect(wrapEmoji('123abc😅def456#*')).to.eq('123abc<span class="wmE">😅</span>def456#*')
  })

  it('wraps all emoji', function () {
    expect(wrapEmoji('abc😅def😂')).to.eq('abc<span class="wmE">😅</span>def<span class="wmE">😂</span>')
  })

  it('wraps all emoji in multiline text', function () {
    expect(wrapEmoji('💯 ab\nc😅def\n 😂')).to.eq('<span class="wmE">💯</span> ab\nc<span class="wmE">😅</span>def\n <span class="wmE">😂</span>')
  })

  it('wraps sequential emojis in a single tag', function () {
    expect(wrapEmoji('abc 😂💯😅 def')).to.eq('abc <span class="wmE">😂💯😅</span> def')
  })

  it('breaks down sequential emoji split by multiline', function () {
    expect(wrapEmoji('abc 😂\n💯😱 def')).to.eq('abc <span class="wmE">😂</span>\n<span class="wmE">💯😱</span> def')
  })
})
