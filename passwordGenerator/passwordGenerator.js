const characterAmountLabel = document.getElementById("characterAmountLabel");
const numberOfCharactersSlider = document.getElementById(
  "numberOfCharactersSlider"
);
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateSubmitButton = document.getElementById("generateSubmitButton");

const showCharacterAmount = () => {
  characterAmountLabel.innerHTML = `Number of Characters: ${numberOfCharactersSlider.value}`;
};

numberOfCharactersSlider.addEventListener("input", showCharacterAmount);

generateSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
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
