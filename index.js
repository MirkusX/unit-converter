function sum() {
    let lengthFeet = document.getElementById("length-feet")
    let lengthMeter = document.getElementById("length-meter")
    let volumeGallon = document.getElementById("volume-gallon")
    let volumeLiter = document.getElementById("volume-liter")
    let massPounds = document.getElementById("mass-lb")
    let massKilograms = document.getElementById("mass-kg")
    let input = document.getElementById("input").value

    let lengthFt = input * 3.28
    let lengthM = input / 3.28
    lengthFeet.textContent = input + " Meter: " + lengthFt.toFixed(3) + " Feet"
    lengthMeter.textContent = input + " Feet: " + lengthM.toFixed(3) + " Meter"

    let volumeGall = input * 0.264172
    let volumeLit = input / 3.785
    volumeGallon.textContent = input + " Liter: " + volumeGall.toFixed(3) + " Gallon"
    volumeLiter.textContent = input + " Gallon: " + volumeLit.toFixed(3) + " Liter"

    let massLb = input * 2.2
    let massKg = input / 2.2
    massPounds.textContent = input + " Kilograms: " + massLb.toFixed(3) + " Pounds"
    massKilograms.textContent = input + " Pounds: " + massKg.toFixed(3) + " Kilograms"
}