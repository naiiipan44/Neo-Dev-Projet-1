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

// Extract the button that user will click on to validate his form
const validationButton = document.querySelector(".submit-button");
// Extract the container form, so we will be able to work on it
const userForm = document.querySelector(".user-form");

// Listen to the final button "click"
validationButton.addEventListener("click", (event) => {
  // page will not reload
  event.preventDefault();
  // extract each user information into the JS script
  let userName = document.getElementById("user-name");
  let userPassword = document.getElementById("user-password");
  let userMail = document.getElementById("user-mail");
  let userCurrentCity = document.getElementById("user-current-city");
  let userCurrentFormation = document.getElementById("user-current-formation");
  let userLinkedIn = document.getElementById("user-linkedin");
  let userGithub = document.getElementById("user-github");

  //userFormTable will be filled using the user information ahead
  userFormTable.name = userName.value;
  userFormTable.password = userPassword.value;
  userFormTable.email = userMail.value;
  userFormTable.currentCity = userCurrentCity.value;
  userFormTable.currentFormation = userCurrentFormation.value;
  userFormTable.linkedInLink = userLinkedIn.value;
  userFormTable.gitHubLink = userGithub.value;

  // check that the userFormTable is well filled !
  console.log(userFormTable);

  // create a JSON fill to store userFormTable as strings
  const jsonUser = JSON.stringify(userFormTable);
  // add it to the local storage of the user session and refer it as "user"
  localStorage.setItem("user", jsonUser);

  // extract the HTML pop-up div into the JS script
  const popup = document.querySelector(".pop-up");
  // change the CSS display property of the pop-up div to make it appear on the user screen
  popup.style.display = "block";
});
