angular.module("app").controller("calendarCtrl", function () {
    $("#color-picker").spectrum({
        showPaletteOnly: true,
        showPalette: true,
        hideAfterPaletteSelect: true,
        color: 'blanchedalmond',
        palette: [
            ['black', 'white', 'blanchedalmond',
                'rgb(255, 128, 0);', 'hsv 100 70 50'
            ],
            ['red', 'yellow', 'green', 'blue', 'violet']
        ]
    });
})