let title = document.getElementById("title");
let date = document.getElementById("dueDate");

let cardCount = 0;
let deleteButtonCount = 0;
let optional = document.querySelectorAll(".optional");
let important = document.querySelectorAll(".important");
let extra = document.querySelectorAll(".extra");

function addProject() {
  const addProjectICon = document.querySelector("#add-project");
  const addMoreProjectsIcon = document.querySelector(".add-more-projects");
  let priority = document.querySelector("select");

  let formTitle = title.value;
  let formDate = date.value;

  addProjectICon.style.display = "none";
  addMoreProjectsIcon.style.display = "flex";
  content.style.display = "flex";

  const cardDiv = document.createElement("div");
  cardDiv.id = "card";
  cardDiv.classList.add(`${++cardCount}`);

  const projectTitle = document.createElement("div");
  projectTitle.id = "projectTitle";
  cardDiv.appendChild(projectTitle);

  const dateDiv = document.createElement("div");
  dateDiv.id = "dateDiv";
  cardDiv.appendChild(dateDiv);

  projectTitle.textContent = `Title: ${formTitle}`;
  dateDiv.textContent = `Date: ${formDate}`;

  if (priority.value === "Optional Task") {
    cardDiv.classList.add("optional");
  } else if (priority.value === "Important Task") {
    cardDiv.classList.add("important");
  } else if (priority.value === "Extra Task") {
    cardDiv.classList.add("extra");
  }

  const managingIcon = document.createElement("div");
  managingIcon.id = "managingIcon";

  const removeButton = document.createElement("div");
  removeButton.classList.add("deleteButton");
  removeButton.id = `${++deleteButtonCount}`;
  removeButton.innerHTML = `<button id="${deleteButtonCount}"><svg id="${deleteButtonCount}"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><title>delete</title><path id="${deleteButtonCount}" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg></button>`;
  managingIcon.appendChild(removeButton);

  const completeButton = document.createElement("div");
  completeButton.classList.add("completedButton");
  completeButton.innerHTML = `<button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><title>completed</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg></button>`;
  managingIcon.appendChild(completeButton);
  cardDiv.appendChild(managingIcon);

  content.appendChild(cardDiv);

  const deleteButtons = document.querySelectorAll(".deleteButton");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const cardToDelete = e.target.closest("#card");
      if (cardToDelete) {
        cardToDelete.remove();
      }
    });
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "red";
    });

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "";
    });
  });

  const completedButton = document.getElementsByClassName("completedButton");

  // completedButton.addEventListener("click", () => {
  //   completedButton.classList.add("complete");
  // });
  optional = document.querySelectorAll(".optional");
  important = document.querySelectorAll(".important");
  extra = document.querySelectorAll(".extra");

  optional.forEach((item) => {
    item.style.display = "none";
  });

  important.forEach((item) => {
    item.style.display = "none";
  });

  extra.forEach((item) => {
    item.style.display = "none";
  });
}

export { addProject, optional, important, extra };
