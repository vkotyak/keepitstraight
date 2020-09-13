let acceleration = 0
let accelerationY = 0
let accelerationX = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    accelerationX = Math.abs(input.acceleration(Dimension.X)) / 4
    accelerationY = Math.abs(input.acceleration(Dimension.Y)) / 4
    acceleration = (accelerationX + accelerationY) / 2
    led.setBrightness(acceleration)
})
