// @ts-check

'use strict'

import { expect } from 'chai'
import { html } from '../index.js'
import { html as htmlFromSrc } from '../src/html.js'

describe('main require', function () {
  it('loads #html', function () {
    expect(html).to.equal(htmlFromSrc)
  })
})
