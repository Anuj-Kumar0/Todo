function addProject() {
  const addProjectICon = document.querySelector("#add-project");
  const addMoreProjectsIcon = document.querySelector(".add-more-projects");

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

  const completedIcon = document.createElement("div");
  completedIcon.id = "completedIcon";
  cardDiv.appendChild(completedIcon);

  content.appendChild(cardDiv);
  console.log("add project run");
}

export { addProject };
