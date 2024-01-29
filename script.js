const progressBar = document.getElementById("progressBar");
const passwordInput = document.getElementById("passwordInput");
const recomendationContainer = document.getElementById(
  "recomendationContainer"
);

const handlePasswordCriteria = () => {
  const passwordProblems = checkPasswordStrength(passwordInput.value);

  let progressBarValue = 100;

  if (passwordProblems == null) return;

  passwordProblems.forEach((problem) => {
    progressBarValue -= problem.progressBarReduction;
  });
  progressBar.value = progressBarValue;
};

passwordInput.addEventListener("input", handlePasswordCriteria);

const checkPasswordStrength = (password) => {
  const passwordProblems = [];
  passwordProblems.push(lengthWeakness(password));
  return passwordProblems;
};

const lengthWeakness = (password) => {
  const length = password.length;

  if (length <= 5) {
    // maybe directly output the problem to the progress bar and recommendation div instead of store it in an array
    return {
      message: "increase the length of your password",
      progressBarReduction: 80,
    };
  }

  if (length <= 10) {
    return {
      message: "increase the length of your password",
      progressBarReduction: 20,
    };
  }
};
