# @webmuds/colors

This is the component used by WebMUDs to convert MUD color tags to colored text.

Use color tags in your room descriptions, MOTDs, equipment name, etc as follows:

```
It is {gray}pitch black{/}.
You see {lime}green {olive}leaves{/} resting on the floor.
You sure are {9}bleeding{/}!
```

Those special tags will then be replaced by proper colored text as you play the game. Using the normal client, colors are applied using HTML tags.

## Color Names

### Basic Colors and Codes

You can also use ANSI codes for the fifteen basic colors. E.g., `{9}` instead of `{red}`.

*  <img src="https://www.thecolorapi.com/id?hex=800000&format=svg&named=false&w=14&h=14"/> `{1}` - `{maroon}` - 800000
*  <img src="https://www.thecolorapi.com/id?hex=008000&format=svg&named=false&w=14&h=14"/> `{2}` - `{green}` - 008000
*  <img src="https://www.thecolorapi.com/id?hex=808000&format=svg&named=false&w=14&h=14"/> `{3}` - `{olive}` - 808000
*  <img src="https://www.thecolorapi.com/id?hex=000080&format=svg&named=false&w=14&h=14"/> `{4}` - `{navy}` - 000080
*  <img src="https://www.thecolorapi.com/id?hex=800080&format=svg&named=false&w=14&h=14"/> `{5}` - `{purple}` - 800080
*  <img src="https://www.thecolorapi.com/id?hex=008080&format=svg&named=false&w=14&h=14"/> `{6}` - `{teal}` - 008080
*  <img src="https://www.thecolorapi.com/id?hex=808080&format=svg&named=false&w=14&h=14"/> `{7}` - `{gray}` - 808080
*  <img src="https://www.thecolorapi.com/id?hex=C0C0C0&format=svg&named=false&w=14&h=14"/> `{8}` - `{silver}` - C0C0C0
*  <img src="https://www.thecolorapi.com/id?hex=FF0000&format=svg&named=false&w=14&h=14"/> `{9}` - `{red}` - FF0000
*  <img src="https://www.thecolorapi.com/id?hex=00FF00&format=svg&named=false&w=14&h=14"/> `{10}` - `{lime}` - 00FF00
*  <img src="https://www.thecolorapi.com/id?hex=FFFF00&format=svg&named=false&w=14&h=14"/> `{11}` - `{yellow}` - FFFF00
*  <img src="https://www.thecolorapi.com/id?hex=0000FF&format=svg&named=false&w=14&h=14"/> `{12}` - `{blue}` - 0000FF
*  <img src="https://www.thecolorapi.com/id?hex=FF00FF&format=svg&named=false&w=14&h=14"/> `{13}` - `{magenta}` - FF00FF
*  <img src="https://www.thecolorapi.com/id?hex=00FFFF&format=svg&named=false&w=14&h=14"/> `{14}` - `{cyan}` - 00FFFF
*  <img src="https://www.thecolorapi.com/id?hex=FFFFFF&format=svg&named=false&w=14&h=14"/> `{15}` - `{white}` - FFFFFF

### Advanced Colors

These special colors are available by name only.

*  <img src="https://www.thecolorapi.com/id?hex=FFD700&format=svg&named=false&w=14&h=14"/> `{gold}` - FFD700
*  <img src="https://www.thecolorapi.com/id?hex=FFA500&format=svg&named=false&w=14&h=14"/> `{orange}` - FFA500
*  <img src="https://www.thecolorapi.com/id?hex=FF8C00&format=svg&named=false&w=14&h=14"/> `{darkorange}` - FF8C00
*  <img src="https://www.thecolorapi.com/id?hex=FF4500&format=svg&named=false&w=14&h=14"/> `{orangered}` - FF4500
*  <img src="https://www.thecolorapi.com/id?hex=A52A2A&format=svg&named=false&w=14&h=14"/> `{brown}` - A52A2A
*  <img src="https://www.thecolorapi.com/id?hex=696969&format=svg&named=false&w=14&h=14"/> `{dimgray}` - 696969

If you omit the reset tag (`{/}`), it will be inserted automatically at the end of the text to avoid color bleeding.

## Examples

```javascript
import { html } from '@webmuds/colors'

html("{yellow}Yellow{/} Text")
// => "<span class="wmyellow">Yellow</span> Text"

html("{yellow}Yellow{/} and {red}Red{/} Text")
// => "<span class="wmyellow">Yellow</span> and <span class="wmred">Red</span> Text"

html("{yellow}Yellow{red}Red{/} Text")
// => "<span class="wmyellow">Yellow</span><span class="wmred">Red</span> Text"
```

Any HTML present in the given text will be escaped:

```javascript
html("> {red}\"Red\" Text & {yellow}> 'Yellow' <")
// => &gt; <span class="wmred">&quot;Red&quot; Text &amp; </span><span class="wmyellow">&gt; &#39;Yellow&#39; &lt;</span>
```

You can prevent HTML escaping by passing `false` as the second parameter to the `html` method. This is useful only if you're building websites and would like to use color escaping mixed with your other HTML content:

```javascript
html("{red}\"<b>Bold Red</b>\"{/} &amp; '<i>{yellow}Italic Yellow{/}</i>'", false)
// => <span class="wmred">"<b>Bold Red</b>"</span> &amp; '<i><span class="wmyellow">Italic Yellow</span></i>'
```

## Removing Color Tags

This library offers a `strip` method to remove color tags from a string:

```js
import { strip } from '@webmuds/colors'

strip("{yellow}Yellow{/} Text")
// => "Yellow Text"
```

## Emoji

This library provides an additional `wrapEmoji()` method that wraps all emoji in `<span class="wmE">` tags.

```js
import { wrapEmoji } from '@webmuds/colors'

wrapEmoji("looking good 👍")
// => 'looking good <span class="wmE">👍</span>'
```

You can then use CSS to change the `wmE` class to use a different font (for instance, a [monochrome emoji font](https://fonts.google.com/noto/specimen/Noto+Emoji?noto.query=emoji)).

_(wmE = webmuds emoji)_

## CSS File

This library provides the above CSS classes in `css/colors.css` so that you can import it in other projects. Classes are prefixed with `wm` to avoid collision.

## License

MIT
