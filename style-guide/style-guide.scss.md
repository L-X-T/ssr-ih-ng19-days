# SCSS Style Guide

Last updated on 2024-11-18.

This document contains guidelines for _Angular_ styling (SCSS) files.

## Do

### Must do

- use [**Prettier**](https://prettier.io/)
- use [**Stylelint**](https://stylelint.io/)
- use **SCSS**
- use **strict formatting**
  - use **2 spaces intents** (Prettier)
  - use **`'single quotes'`** (Prettier)
  - use **1 selector per line** (Prettier)
  - use **1 property per line** (Prettier)
  - use **`dash-separated-lowercase`** for selectors
  - separate rules by new lines (Stylelint)
  - use meaningful empty lines to separate code
  - put a blank line (two line breaks) between rules
- order properties alphabetically (Stylelint)
- use classes or element-names (component selectors), avoid ids
- if `ViewEncapsulation.None` a prefix must be used
  - project specific prefix
  - but not to CSS custom properties
- max 2, in rare cases 3 nested selectors
- prefer using global CSS custom properties
- prefer component-specific styles for component style
- use global styles for global styles only
- use shorthand or intrinsic wherever possible and useful
  - `margin: 1em auto;`
- write zero values without a unit
  - `margin: 0;`
- explicitly write the 0 (Prettier)
  - `margin: 0.5em;`

### Should do

- write less & simple SCSS
- use BEM syntax (Block, Element, Modifier)
  - `.lxt-person {}`
  - `.lxt-person__head {}`
  - `.lxt-person--tall {}`
  - there are no nested BEM selectors
- organise global styles by using imports
  - 1.) Variables (breakpoints, colors, sizes)
  - 2.) Libraries and helpers (CDK, Bootstrap)
  - 3.) Fonts
  - 4.) Mixins
  - 5.) Objects
  - 6.) Variants
- use hsl()/hsla() colors (via custom properties)

## Don't

- try to **avoid inline styles** - it may become a CSP issue
- try to **avoid `!important`** - it's a bad habit, believe me
- try to **avoid using existing library classes** - use prefixed classes instead
  - (e.g. don't use `.heading`, `.label` or `.form-control`)
  - only use those classes to override the lib's own CSS
- try to avoid nesting with more than 2 levels (in rare cases 3)
  - okay: `.lxt-is-home .lxt-person`
  - hell no: `body.lxt-is-home .lxt-person.lxt-is-disabled > .lxt-avatar`
  - use modifier instead: `.lxt-avatar--disabled`
- try to avoid defining colors in components (use custom properties)
- try to avoid `float` use CSS grid or flexbox instead
  - howto [choose between grid and flexbox](https://medium.com/youstart-labs/beginners-guide-to-choose-between-css-grid-and-flexbox-783005dd2412)
- try to avoid writing properties which could be shorthanded (e.g., margin)
- try to avoid `&` to nest styles (for better readability)

## Resources

- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)
- [Sass Guidelines](https://sass-guidelin.es/)
- [css { guide: lines; }](https://cssguidelin.es/)
- [CSS Guidelines](https://github.com/chris-pearce/css-guidelines)
- [Google CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#CSS)

## Back to index

- Angular [coding style guide](style-guide.md)
