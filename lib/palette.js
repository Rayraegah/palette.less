(function() {
    var WARM_DARK = 0.5; // warm color darken radio
    var WARM_ROTATE = -26; // warm color rotate degree
    var COLD_DARK = 0.55; // cold color darken radio
    var COLD_ROTATE = 10; // cold color rotate degree
    var getShadeColor = function(c) {
        var shadeColor = tinycolor(c);
        // warm and cold color will darken in different radio, and rotate in different degree
        // warmer color
        if (shadeColor.toRgb().r > shadeColor.toRgb().b) {
            return shadeColor
                .darken(shadeColor.toHsl().l * WARM_DARK * 100)
                .spin(WARM_ROTATE)
                .toHexString();
        }
        // colder color
        return shadeColor
            .darken(shadeColor.toHsl().l * COLD_DARK * 100)
            .spin(COLD_ROTATE)
            .toHexString();
    };
    var primaryEasing = colorEasing(0.6);
    this.Palette = function(color, index) {
        var currentEasing = colorEasing(index * 0.1);
        // return light colors after tint
        if (index <= 6) {
            return tinycolor
                .mix('#ffffff', color, currentEasing * 100 / primaryEasing)
                .toHexString();
        }
        return tinycolor
            .mix(
                getShadeColor(color),
                color,
                (1 - (currentEasing - primaryEasing) / (1 - primaryEasing)) *
                    100
            )
            .toHexString();
    };
})()