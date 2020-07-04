forever(function () {
    while (input.touchD0.isPressed()) {
        pixel.setColor(0xff0000)
        keyboard.functionKey(KeyboardFunctionKey.RightArrow, KeyboardKeyEvent.Press)
        pause(500)
    }
    while (input.touchD1.isPressed()) {
        pixel.setColor(0x00ff00)
        keyboard.functionKey(KeyboardFunctionKey.LeftArrow, KeyboardKeyEvent.Press)
        pause(500)
    }
    while (input.touchD2.isPressed()) {
        pixel.setColor(0x0000ff)
        keyboard.functionKey(KeyboardFunctionKey.UpArrow, KeyboardKeyEvent.Press)
        pause(500)
    }
})
