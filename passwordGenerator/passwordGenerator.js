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
const generatedPassword = document.getElementById("generatedPassword");

// above are elements that have been identified in the html

numberOfCharactersSlider.addEventListener("input", showCharacterAmount);

const generateArrayFromLowToHigh = (low, high) => {
  const lowToHighArray = [];
  for (let i = low; i <= high; i++) {
    lowToHighArray.push(i);
  }
  return lowToHighArray;
};

//below are the character codes ranges for each case

const lowercaseCharCodes = generateArrayFromLowToHigh(97, 122);
const uppercaseCharCodes = generateArrayFromLowToHigh(65, 90);
const numbersCharCodes = generateArrayFromLowToHigh(48, 57);
const symbolCharCodes = generateArrayFromLowToHigh(33, 47)
  .concat(generateArrayFromLowToHigh(58, 64))
  .concat(generateArrayFromLowToHigh(91, 96))
  .concat(generateArrayFromLowToHigh(123, 126));

let passwordCharacters = [];

const generatePassword = (characterAmount, uppercase, numbers, symbols) => {
  let characterCodes = lowercaseCharCodes;
  if (uppercase) characterCodes = characterCodes.concat(uppercaseCharCodes);
  if (numbers) characterCodes = characterCodes.concat(numbersCharCodes);
  if (symbols) characterCodes = characterCodes.concat(symbolCharCodes);

  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      characterCodes[Math.floor(Math.random() * characterCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
    console.log(characterCode);
  }
};

generateSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const characterAmount = numberOfCharactersSlider.value;
  const uppercase = includeUppercase.checked;
  const numbers = includeNumbers.checked;
  const symbols = includeSymbols.checked;
  generatePassword(characterAmount, uppercase, numbers, symbols);
  generatedPassword.innerText = `Your password is: ${passwordCharacters.join(
    ""
  )}`;
});
