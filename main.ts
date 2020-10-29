basic.forever(function on_forever() {
    for (let index = 0; index < 5; index++) {
        led.plot(index, index)
        basic.pause(100)
    }
    //  repeat for loop from here
    for (let index2 = 0; index2 < 5; index2++) {
        led.unplot(index2, index2)
        basic.pause(100)
    }
})
