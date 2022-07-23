input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(330, music.beat(BeatFraction.Quarter))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        basic.showString(" .-------.-.--...---. = \"BONNE-NUIT\" en morse")
    }
})
