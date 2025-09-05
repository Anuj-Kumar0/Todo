import { editCard } from "./edit-card";

let title = document.getElementById("title");
let date = document.getElementById("dueDate");

let cardCount = 0;
let deleteButtonCount = 0;
let optional = document.querySelectorAll(".optional");
let important = document.querySelectorAll(".important");
let extra = document.querySelectorAll(".extra");

const content = document.querySelector("#content");

// ---- STORAGE HELPERS ----
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

// ---- RENDER A SINGLE CARD ----
function renderCard(task) {
  const cardDiv = document.createElement("div");
  cardDiv.id = "card";
  cardDiv.dataset.id = task.id;
  cardDiv.classList.add(`${++cardCount}`);

  const projectTitle = document.createElement("div");
  projectTitle.id = "projectTitle";
  projectTitle.textContent = `Title: ${task.title}`;
  cardDiv.appendChild(projectTitle);

  const dateDiv = document.createElement("div");
  dateDiv.id = "dateDiv";
  dateDiv.textContent = `Date: ${task.date}`;
  cardDiv.appendChild(dateDiv);

  if (task.priority === "Optional Task") {
    cardDiv.classList.add("optional");
  } else if (task.priority === "Important Task") {
    cardDiv.classList.add("important");
  } else {
    cardDiv.classList.add("extra");
  }

  const managingIcon = document.createElement("div");
  managingIcon.id = "managingIcon";

  // delete
  const removeButton = document.createElement("div");
  removeButton.classList.add("deleteButton");
  removeButton.id = `${++deleteButtonCount}`;
  removeButton.innerHTML = `<button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg></button>`;
  removeButton.addEventListener("click", () => {
    let tasks = getTasks();
    tasks = tasks.filter((t) => t.id !== task.id);
    saveTasks(tasks);
    cardDiv.remove();
  });
  managingIcon.appendChild(removeButton);

  // complete
  const completeButton = document.createElement("div");
  completeButton.classList.add("completedButton");
  completeButton.innerHTML = `<button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><title>completed</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg></button>`;
  managingIcon.appendChild(completeButton);

  // edit
  const editButton = document.createElement("div");
  editButton.classList.add("editButton");
  editButton.innerHTML = `<button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><title>Edit</title><path d="M19.39 10.74L11 19.13V22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V10.3C19.78 10.42 19.57 10.56 19.39 10.74M13 19.96V22H15.04L21.17 15.88L19.13 13.83L13 19.96M22.85 13.47L21.53 12.15C21.33 11.95 21 11.95 20.81 12.15L19.83 13.13L21.87 15.17L22.85 14.19C23.05 14 23.05 13.67 22.85 13.47Z" /></svg></button>`;
  editButton.addEventListener("click", (e) => editCard(e, task));
  managingIcon.appendChild(editButton);

  cardDiv.appendChild(managingIcon);
  content.appendChild(cardDiv);
}

// ---- ADD PROJECT ----
function addProject() {
  const addProjectICon = document.querySelector("#add-project");
  const addMoreProjectsIcon = document.querySelector(".add-more-projects");
  let priority = document.querySelector("select");

  let formTitle = title.value;
  let formDate = date.value;

  addProjectICon.style.display = "none";
  addMoreProjectsIcon.style.display = "flex";
  content.style.display = "flex";

  const task = {
    id: Date.now(),
    title: formTitle,
    date: formDate,
    priority: priority.value,
  };

  let tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);

  renderCard(task);

  // reset filters
  optional = document.querySelectorAll(".optional");
  important = document.querySelectorAll(".important");
  extra = document.querySelectorAll(".extra");

  optional.forEach((item) => (item.style.display = "none"));
  important.forEach((item) => (item.style.display = "none"));
  extra.forEach((item) => (item.style.display = "none"));
}

// ---- LOAD TASKS ON STARTUP ----
function loadTasks() {
  const tasks = getTasks();
  tasks.forEach(renderCard);
}

export { addProject, optional, important, extra, loadTasks };
