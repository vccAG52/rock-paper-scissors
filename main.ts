let Hand = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showIcon(IconNames.Scissors)
    basic.clearScreen()
    basic.pause(100)
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showIcon(IconNames.Scissors)
    } else {
        if (Hand == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                # # # # #
                # # # # #
                . # # # .
                `)
        } else {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
})
