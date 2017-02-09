# Colourless

## About
A visual hierarchy colour generator for establishing visual continuity in design. The colors generated meets WCAG 2.0 standards to ensure adequate contrast.


## Under the hood
The LESS function `Palette` generates 10 shallow colors from a given base color. The algorithm uses Bezier curves and mixes colours with White, Black, Deep, Warm and Cold colours from different angles of rotation to generate a swatch. The swatch is always a complete gradient palette.

for usage and example see `test/colors.less`

# License
Feel free to use it as you please.