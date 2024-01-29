const numberOfCharactersSlider = document.getElementById(
  "numberOfCharactersSlider"
);
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateSubmitButton = document.getElementById("generateSubmitButton");

generateSubmitButton.addEventListener("click", () => {
  console.log(numberOfCharactersSlider.value);
  if (!includeUppercase.checked) {
    console.log(false);
  } else {
    console.log(true);
  }

  if (!includeNumbers.checked) {
    console.log(false);
  } else {
    console.log(true);
  }

  if (!includeSymbols.checked) {
    console.log(false);
  } else {
    console.log(true);
  }
});
