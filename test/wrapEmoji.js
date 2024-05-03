// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { wrapEmoji } from '../src/html.js'

describe('#wrapEmoji', function () {
  it('wraps emojis in <span>', function () {
    expect(wrapEmoji('😅')).to.eq('<span class="wmE">😅</span>')
  })

  it('does not affect non-emoji', function () {
    expect(wrapEmoji('123abc😅def456#*')).to.eq('123abc<span class="wmE">😅</span>def456#*')
  })

  it('tags all emojis', function () {
    expect(wrapEmoji('abc😅def😂')).to.eq('abc<span class="wmE">😅</span>def<span class="wmE">😂</span>')
  })

  it('tags all emojis in multiline text', function () {
    expect(wrapEmoji('💯 ab\nc😅def\n 😂')).to.eq('<span class="wmE">💯</span> ab\nc<span class="wmE">😅</span>def\n <span class="wmE">😂</span>')
  })

  it('tags sequential emojis in a single tag', function () {
    expect(wrapEmoji('abc 😂💯😅 def')).to.eq('abc <span class="wmE">😂💯😅</span> def')
  })

  it('breaks down sequential emojis split by multiline', function () {
    expect(wrapEmoji('abc 😂\n💯😅 def')).to.eq('abc <span class="wmE">😂</span>\n<span class="wmE">💯😅</span> def')
  })
})
