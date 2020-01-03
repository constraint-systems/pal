'use strict'

const fs = require('fs')
const themes = require('../s/themes.js')

let converted = themes.map(o => {
  return {
    name: o.PROFILE_NAME,
    bg: o.BACKGROUND_COLOR,
    fg: o.FOREGROUND_COLOR,
    hues: [
      o.COLOR_02,
      o.COLOR_03,
      o.COLOR_04,
      o.COLOR_05,
      o.COLOR_06,
      o.COLOR_07,
    ],
  }
})

fs.writeFileSync(
  '../s/theme_min.js',
  'export let themes = ' + JSON.stringify(converted)
)
