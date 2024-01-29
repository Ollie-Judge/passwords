const progressBar = document.getElementById("progressBar");
const passwordInput = document.getElementById("passwordInput");
const recomendationContainer = document.getElementById(
  "recomendationContainer"
);
const lowercaseContainer = document.getElementById("lowercaseContainer");
const uppercaseContainer = document.getElementById("uppercaseContainer");
const numberContainer = document.getElementById("numberContainer");
const symbolContainer = document.getElementById("symbolContainer");

let progressBarValue = 0;

const recommendation = document.createElement("p");

const checkUpperCase = () => {
  if (/[A-Z]/g.test(passwordInput.value)) {
    console.log("upper");
    progressBarValue += 2;
    console.log(progressBarValue);
  } else {
    //add these into different divs
    uppercaseContainer.innerHTML = "add some uppercase letters";
  }
};

const checkLowerCase = () => {
  if (/[a-z]/g.test(passwordInput.value)) {
    console.log("lower");
    progressBarValue += 2;
    console.log(progressBarValue);
  } else {
    lowercaseContainer.innerHTML = "add some lowercase letters";
  }
};

const checkNumbers = () => {
  if (/[0-9]/g.test(passwordInput.value)) {
    console.log("number");
    progressBarValue += 2;
    console.log(progressBarValue);
  } else {
    numberContainer.innerHTML = "add some numbers";
  }
};

const checkSymbols = () => {
  if (/[^0-9a-zA-Z\s]/g.test(passwordInput.value)) {
    console.log("symbol");
    progressBarValue += 2;
    console.log(progressBarValue);
  } else {
    symbolContainer.innerHTML = "add some symbols";
  }
};

const checkLength = () => {
  console.log(passwordInput.value.length);
  if (passwordInput.value.length <= 1) {
    recommendation.textContent = "too short";
    recomendationContainer.appendChild(recommendation);
    progressBarValue += 5;
    console.log(progressBarValue);
  } else {
    recomendationContainer.innerHTML = "";
  }
};

const check = () => {
  if (passwordInput.value.length === 0) progressBarValue = 0;
  checkLength();
  checkLowerCase();
  checkUpperCase();
  checkNumbers();
  checkSymbols();
  progressBar.textContent = `${progressBarValue}%`;
  progressBar.value = progressBarValue;
};

passwordInput.addEventListener("input", check);
