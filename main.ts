radio.setGroup(3)
radio.setFrequencyBand(7)

let btnA = false
let btnB = false
let btnLOGO = false

basic.forever(function() {
    if (btnB == true) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -226)
    } else {
        PCAmotor.MotorStop(PCAmotor.Motors.M1)
    }
    if (btnA == true) {
        PCAmotor.MotorRun(PCAmotor.Motors.M4, 250)
    } else {
        PCAmotor.MotorStop(PCAmotor.Motors.M4)
    }
    if (btnLOGO == true) {
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -250)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 226)
    }
})

radio.onReceivedValue(function(name: string, value: number) {
    if (name == "btnA") {
        btnA = (value == 1)
    }
    if (name == "btnB") {
        btnB = (value == 1)
    }
    if (name == "btnLOGO") {
        btnLOGO = (value == 1)
    }
})