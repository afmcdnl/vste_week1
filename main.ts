input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("micro:bit forever!")
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Rollerskate)
})
