let title = document.getElementById("title");
let date = document.getElementById("dueDate");

function addProject() {
  const addProjectICon = document.querySelector("#add-project");
  const addMoreProjectsIcon = document.querySelector(".add-more-projects");

  let formTitle = title.value;
  let formDate = date.value;

  addProjectICon.style.display = "none";
  addMoreProjectsIcon.style.display = "flex";
  content.style.display = "flex";

  const cardDiv = document.createElement("div");
  cardDiv.id = "card";

  const projectTitle = document.createElement("div");
  projectTitle.id = "projectTitle";
  cardDiv.appendChild(projectTitle);

  const dateDiv = document.createElement("div");
  dateDiv.id = "dateDiv";
  cardDiv.appendChild(dateDiv);

  projectTitle.textContent = `Title: ${formTitle}`;
  dateDiv.textContent = `Date: ${formDate}`;

  const managingIcon = document.createElement("div");
  managingIcon.id = "managingIcon";
  managingIcon.innerHTML = `<button id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg></button>
  <button id="completedButton"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><title>completed</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg></button>`;
  cardDiv.appendChild(managingIcon);

  content.appendChild(cardDiv);

  const deleteButton = document
    .getElementById("deleteButton")
    .addEventListener("click", () => {
      cardDiv.remove();
    });

  const completedButton = document
    .getElementById("completedButton")
    .addEventListener("click", () => {
      completedButton.classList.add("complete");
    });
}

export { addProject };
