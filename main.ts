input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        number1 += 1
        basic.showNumber(number1)
    }
    if (_switch == 1) {
        number2 += 1
        basic.showNumber(number2)
    }
})
input.onButtonPressed(Button.AB, function () {
    operator += 1
    if (operator == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (operator == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (operator == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (operator == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    _switch += 1
    if (_switch == 2) {
        if (operator == 1) {
            basic.showNumber(number1 + number2)
        } else {
            if (operator == 2) {
                basic.showNumber(number1 - number2)
            } else {
                if (operator == 3) {
                    basic.showNumber(0 * 0)
                } else {
                    if (operator == 4) {
                        basic.showNumber(number1 / number2)
                    }
                }
            }
        }
    }
})
let operator = 0
let _switch = 0
let number2 = 0
let number1 = 0
number1 = 0
number2 = 0
_switch = 0
