let input = prompt("Enter your number")
// let input = 20
let inputEl = document.getElementById("input-el")
inputEl.textContent = input


// LENGTH CONVERSION
// Meters to feet
document.getElementById("meterInput").textContent = input + " meters"
let toFeet = (input * 3.28084).toFixed(3) 
document.getElementById("feetResult").textContent = toFeet + " feet"
// Feet to meters
document.getElementById("feetInput").textContent = input + " feet"
let toMeters = (input * 0.3048).toFixed(3)
document.getElementById("meterResult").textContent = toMeters + " meters"

// VOLUME CONVERSION
// Liters to gallons
document.getElementById("litersInput").textContent = input + " liters"
let toGallons = (input * 0.264172).toFixed(3)
document.getElementById("gallonsResult").textContent = toGallons + " gallons"

// Gallons to liters
document.getElementById("gallonsInput").textContent = input + " gallons"
let toLiters = (input *  3.785412).toFixed(3)
document.getElementById("litersResult").textContent = toLiters + " liters"

// MASS CONVERSION
// Kilograms to pounds 
document.getElementById("kilosInput").textContent = input + " kilos"
let toPounds = (input * 2.2).toFixed(2)
document.getElementById("poundsResult").textContent = toPounds + " pounds"

// Pounds to Kilograms
document.getElementById("poundsInput").textContent = input + " pounds"
let toKilos = (input * 0.45359237 ).toFixed(3)
document.getElementById("kilosResult").textContent = toKilos + " kilos"