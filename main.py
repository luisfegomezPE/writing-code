def on_forever():
    for index in range(5):
        led.plot(index, index)
        basic.pause(100)
    # repeat for loop from here
    for index2 in range(5):
        led.unplot(index2, index2)
        basic.pause(100)
basic.forever(on_forever)
