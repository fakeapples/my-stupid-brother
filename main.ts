if (true) {
    basic.showString("My brother")
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showString("Is genius")
} else {
    basic.showString("My brother")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showString("Is stupid")
}
basic.forever(function () {
	
})
