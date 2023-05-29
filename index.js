const inputEl = document.querySelector("input")
const buttonEl = document.querySelector("button")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

function meterToFeet(meter){
    let feet = (3.281 * meter).toFixed(3)
    return feet
}

function feetToMeter(feet){
    let meter = (feet/3.281).toFixed(3)
    return meter
}

function literToGallon(litre){
    let gallon = (0.264 * litre).toFixed(3)
    return gallon
}

function gallonToLitre(gallon){
    let litre = (gallon/0.264).toFixed(3)
    return litre
}

function kgToPound(kg){
    let pound = (2.204 * kg).toFixed(3)
    return pound
}

function poundToKg(pound){
    let kg = (pound/2.204).toFixed(3)
    return kg
}

buttonEl.addEventListener("click", function(){
    const value = inputEl.value
    if(value != ""){
        lengthEl.textContent = `${value} meters = ${meterToFeet(value)} feet | ${value} feet = ${feetToMeter(value)} meters`

        volumeEl.textContent = `${value} liters = ${literToGallon(value)} gallons | ${value} gallons = ${gallonToLitre(value)} liters`

        massEl.textContent = `${value} kilos = ${kgToPound(value)} pounds | ${value} pounds = ${poundToKg(value)} kilos`
    }
})
