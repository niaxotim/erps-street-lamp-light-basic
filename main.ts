input.onButtonPressed(Button.A, function () {
    Kitronik_LAMPbit.lampLightLED(Kitronik_LAMPbit.DisplayLamp.On)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_LAMPbit.lampLightLED(Kitronik_LAMPbit.DisplayLamp.Off)
})
