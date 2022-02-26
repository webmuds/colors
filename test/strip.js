// @ts-check

'use strict'

import { expect } from '@dimensionalpocket/development'
import { strip } from '../src/strip.js'

describe('#strip', function () {
  it('strips color tags from string', function () {
    expect(strip('{red}value{/}')).to.eq('value')
    expect(strip('{red}value1{green}value2{/}')).to.eq('value1value2')
  })

  it('respects spaces', function () {
    expect(strip(' {red}value{/}')).to.eq(' value')
    expect(strip('{red}value{/} ')).to.eq('value ')
    expect(strip(' {red}value{/} ')).to.eq(' value ')
    expect(strip('{red} value{/}')).to.eq(' value')
    expect(strip('{red}value {/}')).to.eq('value ')
    expect(strip('{red} value {/}')).to.eq(' value ')
  })

  it('removes tags from multiline strings', function () {
    expect(strip('{red}line1\nline2\n{green}line3{/}')).to.eq('line1\nline2\nline3')
  })

  it('leaves non-color tags untouched', function () {
    expect(strip('{red}{foo}bar')).to.eq('{foo}bar')
  })
})
