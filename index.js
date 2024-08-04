const inputEl = document.getElementById("input-el");
const covertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-result");
let volumeEl = document.getElementById("volume-result");
let massEl = document.getElementById("mass-result");

covertBtn.addEventListener("click", function () {
  let inputFieldValue = inputEl.value;
  let numericValue = Number(inputFieldValue);
  convertLength(numericValue);
  convertVolume(numericValue);
  convertMass(numericValue);
});

function convertLength(numericValue) {
  let meterToFeet = numericValue * 3.28084;
  let feetToMeter = numericValue * 0.3048;
  let lengthResult = "";
  lengthResult += `${numericValue} meters = ${meterToFeet.toFixed(3)} feet | ${numericValue} feet = ${feetToMeter.toFixed(3)}`;
  lengthEl.textContent = lengthResult;
}

function convertVolume(numericValue) {
  let litersToGallons = numericValue * 0.2642;
  let gallonsToLiters = numericValue * 3.78541;
  let volumeResult = "";
  volumeResult += `${numericValue} liters = ${litersToGallons.toFixed(3)} gallons | ${numericValue} gallons = ${gallonsToLiters.toFixed(3)}`;
  volumeEl.textContent = volumeResult;
}

function convertMass(numericValue) {
  let kilosToPounds = numericValue * 2.20462;
  let poundsToKilos = numericValue * 0.4536;
  let massResult = "";
  massResult += `${numericValue} kilos = ${kilosToPounds.toFixed(3)} pounds | ${numericValue} pounds = ${poundsToKilos.toFixed(3)}`;
  massEl.textContent = massResult;
}
