// Empty object that will be used to store the user informations

const userFormTable = {
  name: "",
  password: "",
  email: "",
  currentCity: "",
  currentFormation: "",
  linkedInLink: "",
  gitHubLink: "",
  langages: [""],
  profilType: "",
};

const validationButton = document.querySelector(".submit-button");
const userForm = document.querySelector(".user-form");

// Idea to extract userForm :
// const data = new FormData(userForm);
// const dataEntries = data.entries();
// const jsonData = Object.fromEntries(dataEntries);
// console.log(jsonData);

// Get the user information when he clicked on submit button
validationButton.addEventListener("click", function (event) {
  event.preventDefault();
  let userName = document.getElementById("user-name");
  let userPassword = document.getElementById("user-password");
  let userMail = document.getElementById("user-mail");
  let userCurrentCity = document.getElementById("user-current-city");
  let userCurrentFormation = document.getElementById("user-current-formation");
  let userLinkedIn = document.getElementById("user-linkedin");
  let userGithub = document.getElementById("user-github");

  userFormTable.name = userName.value;
  userFormTable.password = userPassword.value;
  userFormTable.email = userMail.value;
  userFormTable.currentCity = userCurrentCity.value;
  userFormTable.currentFormation = userCurrentFormation.value;
  userFormTable.linkedInLink = userLinkedIn.value;
  userFormTable.gitHubLink = userGithub.value;

  console.log(userFormTable);
  const jsonUser = JSON.stringify(userFormTable);
  localStorage.setItem("user", jsonUser);
});

localStorage.setItem;
