basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `)
basic.pause(5000)
led.plot(2, 2)
basic.pause(5000)
led.unplot(3, 1)
basic.pause(5000)
led.unplot(1, 3)
basic.pause(5000)
led.plot(3, 1)
basic.pause(5000)
led.unplot(1, 1)
basic.pause(5000)
basic.clearScreen()
