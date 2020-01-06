# Pal

Apply an eight-color terminal palette to an image. Use keyboard controls to choose a theme, set thresholds, and cycle hues.

https://pal.constraint.systems

## How it works

### Applying the base colors

Pal looks at each pixel of the image. It first looks at luminance. If the luminance value is lower than the `lothresh` threshold, the pixel is set to black. If the luminance value is higher than the `hithresh` threshold, the pixel is set to white. If it is between the thresholds, it uses a formula to calculate the hue. The pixel is then set to the closest hue (from red, green, yellow, blue, magenta and cyan). If the color has no hue (if its red, green, and blue values are equal) it is set to black or white based on a luminance threshold of 0.5.

### Applying a theme

To apply a theme Pal uses the palette categories from the base color values: red pixels are set to whatever is in that theme's red slot, etc. An alternative way to do it would be to recalculate the closest hue based on the theme's colors (this is how color palettes are usually applied). But Pal doesn't do that. Pal uses the calculations from the base colors and applies the theme on top of that. For black and white Pal use the background and foreground colors from the theme. It uses whichever one is darker for the black pixels (so dark themes use the background color for black while light themes use the foreground color).

`shue` shifts the hue slots according to its value. The background and foreground colors remain the same.

### The shader

I use a [shader](https://github.com/constraint-systems/pal/blob/master/shaders/shaders.js) to apply the themes. Originally I was doing canvas pixel manipulation, but the rendering was taking a long time. Switching to a shader made the theme changes instantaneous. I used [Mike Riethmuller's wonderful guide to get the shader working](https://www.madebymike.com.au/writing/canvas-image-manipulation/), modifying it to fit inside a React app. I'm pretty sure I'm not supposed to use so many if statements in a shader, so if anyone wants to clue me in to a better way to write [the fragment shader](/constraint-systems/pal/blob/master/shaders/shaders.js) I'd be happy to hear it.

### Themes

The themes are from the [Gogh terminal color scheme project](https://github.com/Mayccoll/Gogh). I converted them into a more minimal [JSON file](https://github.com/constraint-systems/pal/blob/master/s/theme_min.js). Let me know if you'd like a theme added and have the color values.
