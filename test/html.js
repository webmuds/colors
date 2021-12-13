// @ts-check

'use strict'

import { expect } from 'chai'
import { html } from '../src/html.js'

describe('#html', function () {
  it('replaces colors', function () {
    const result = html('{yellow}Yellow{/} Text')
    expect(result).to.equal('<span class="wmyellow">Yellow</span> Text')
  })

  it('auto-closes open tags when another tag is used', function () {
    const result = html('{yellow}Yellow{red}Red{/} Text')
    expect(result).to.equal('<span class="wmyellow">Yellow</span><span class="wmred">Red</span> Text')
  })

  it('auto-closes open tags at end of string', function () {
    const result = html('It is {lime}green')
    expect(result).to.equal('It is <span class="wmlime">green</span>')
  })

  it('auto-closes open tags at end of multi-line string', function () {
    const result = html('It is {lime}green\n on a new line \r another \r\n last one.')
    expect(result).to.equal('It is <span class="wmlime">green\n on a new line \r another \r\n last one.</span>')
  })

  it('replaces colors in multi-line string', function () {
    const result = html('It is {lime}green\n on a new line \r another \r\n last one.{/}')
    expect(result).to.equal('It is <span class="wmlime">green\n on a new line \r another \r\n last one.</span>')
  })

  it('defaults to escaping HTML code before parsing color tags', function () {
    const result = html("> {red}\"Red\" Text & {yellow}> 'Yellow' <")
    expect(result).to.equal('&gt; <span class="wmred">&quot;Red&quot; Text &amp; </span><span class="wmyellow">&gt; &#39;Yellow&#39; &lt;</span>')
  })

  it('does not escape HTML when `escape` argument is false', function () {
    const result = html("{red}\"<b>Bold Red</b>\"{/} &amp; '<i>{yellow}Italic Yellow{/}</i>'", false)
    expect(result).to.equal("<span class=\"wmred\">\"<b>Bold Red</b>\"</span> &amp; '<i><span class=\"wmyellow\">Italic Yellow</span></i>'")
  })
})
