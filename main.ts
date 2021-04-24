input.onButtonPressed(Button.A, function () {
    basic.showString("Hola!")
})
input.onButtonPressed(Button.B, function () {
    led.plot(4, 0)
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showIcon(IconNames.SmallHeart)
})
