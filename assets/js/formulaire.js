// Empty object that will be used to store the user informations
const userFormTable = {
  name: "",
  password: "",
  email: "",
  currentCity: "",
  currentFormation: "",
  linkedInLink: "",
  gitHubLink: "",
};

// Incremented language list 
// Extract the plus icon button on HTML
const addButton = document.getElementById("add-button");
// Extract the text input field, where user will type
const inputLanguage = document.querySelector("#language-input");
// Extract the ul in which we will inject the li input 
const languageList = document.querySelector("#language-list");
let indexList = 0;
// Event occurring each time the userd hit the plus icon button

addButton.addEventListener("click", (event) => {
  // avoid page refreshment
  event.preventDefault();
  // We create a variable that we set to a new li node
  addIndex();
  console.log(indexList)
});

function addIndex() {
  indexList++;
  if (indexList <=5) {
    console.log(indexList)
    const newLanguage = document.createElement("li");
    // We add the text to the li
    newLanguage.innerHTML = inputLanguage.value;
    // We add the li to the ul 
    languageList.appendChild(newLanguage);
    // We clear the value of the input
    inputLanguage.value = "";
  }
}



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

  // create a JSON fill to store userFormTable as strings
  const jsonUser = JSON.stringify(userFormTable);
  // add it to the local storage of the user session and refer it as "user"
  localStorage.setItem("user", jsonUser);

  // Handle the popup display
  const popup = document.querySelector(".popup-container");
  let phrasePopUp = document.createElement('h3');
  const popUpDiv = document.querySelector('.popup');
  
  // Starting material for loops above
  let countIndex = 0;
  const tableRandom=[];

  // Fill tableRandom with userFormTable content --> in order to use table methods below
  for (key in userFormTable) {
    tableRandom.push(userFormTable[key]) ;
  }

  // Check if there are empty fields in the form. If it is the case, it break the loop and display the altert message so
  // the user is forced to finish his form (for the section-1 aprt at least)
  for (let i = 0; i < tableRandom.length; i++) {
    if (tableRandom[i] != "" ) {
      countIndex ++;
      console.log(countIndex);
    } else {
      alert("Veuillez remplir tous les champs");
      break;
    }
  }
    
  // Check if the previous loop count is equal to the actual length of the table. If not, the popup is not displayed
    if (tableRandom.length === countIndex) {
      console.log(tableRandom.length)
      phrasePopUp.textContent=`Bravo ${userFormTable.name}, ton profil a été créé, clique ci-dessous pour le découvrir !`;
      popUpDiv.appendChild(phrasePopUp);
      popup.style.display = "block";
    }
});

