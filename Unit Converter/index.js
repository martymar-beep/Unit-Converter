
const meterToFeet = 3.281
const feetToMeter = .3048 
const literToGallon = .264
const gallonToLiter = 3.785 
const kiloToPound = 2.204
const poundToKilo = .454

let inputEl = document.getElementById("input-el")
let btnEl = document.getElementById("btn-el")
let lengthEl = document.getElementById("length-el")
let volEl = document.getElementById("vol-el")
let massEl = document.getElementById("mass-el")


btnEl.addEventListener("click", function(){
     
     let inputValue = parseFloat(inputEl.value)
      
     lengthEl.textContent = `${inputValue} meters = ${(inputValue * meterToFeet).toFixed(3)} 
     feet | ${inputValue} feet = ${(inputValue * feetToMeter).toFixed(3)} meters` 
     
     volEl.textContent = `${inputValue} liters = ${(inputValue * literToGallon).toFixed(3)}
     gallons | ${inputValue} gallons = ${(inputValue * gallonToLiter).toFixed(3)} liters`
     
     massEl.textContent = `${inputValue} kilos = ${(inputValue * kiloToPound).toFixed(3)}
     pounds | ${inputValue} pounds = ${(inputValue * poundToKilo).toFixed(3)} kilos`
  
    })
  
