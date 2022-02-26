// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { html, strip } from '../index.js'
import { html as htmlFromSrc } from '../src/html.js'
import { strip as stripFromSrc } from '../src/strip.js'

describe('main require', function () {
  it('exports html from src', function () {
    expect(html).to.equal(htmlFromSrc)
  })

  it('exports strip from src', function () {
    expect(strip).to.equal(stripFromSrc)
  })
})
