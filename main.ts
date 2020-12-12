basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index)
        basic.pause(100)
    }
    // repeat for loop from here
    for (let index2 = 0; index2 <= 4; index2++) {
        led.unplot(index2, index2)
        basic.pause(100)
    }
})
