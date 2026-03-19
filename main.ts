input.onButtonPressed(Button.A, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 125)
})
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.pause(500)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
