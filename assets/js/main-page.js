const retrieveUser = localStorage.getItem("user");
const parseUser = JSON.parse(retrieveUser);
console.log(parseUser);

const divTitle = document.getElementById("main-title");
const userName = parseUser.name;
const userNameDisplay = document.createElement("h1");
userNameDisplay.textContent = `Hello ${userName}`;
divTitle.appendChild(userNameDisplay);
//sectionName.appendChild(userNameDisplay);
