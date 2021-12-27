input.onButtonPressed(Button.A, function () {
    김치찌개 = 1
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
})
input.onButtonPressed(Button.B, function () {
    김치찌개 = 0
    maqueen.motorStop(maqueen.Motors.All)
})
function 부대지개 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    basic.pause(randint(200, 500))
    김치찌개 = 1
}
function 된장찌개 () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
    basic.pause(randint(200, 500))
    김치찌개 = 1
}
let 김치찌개 = 0
maqueen.motorStop(maqueen.Motors.All)
김치찌개 = 0
basic.forever(function () {
    if (김치찌개 == 1) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
            김치찌개 = randint(3, 4)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        }
        if (김치찌개 == 3) {
            된장찌개()
        }
        if (김치찌개 == 4) {
            부대지개()
        }
    }
})
