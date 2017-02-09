build:
	# building
	@ mkdir -p build
	@ mkdir -p dist
	# ...less files
	@ cat lib/start.frag lib/bezier.js lib/end.frag > build/bezier.less
	@ cat lib/start.frag lib/tinycolor.js lib/end.frag > build/tinycolor.less
	@ cat lib/start.frag lib/palette.js lib/end.frag > build/palette.less
	# ...library
	@ cat build/bezier.less build/tinycolor.less build/palette.less > dist/palette.less
	# cleaning
	@ rm -rf build