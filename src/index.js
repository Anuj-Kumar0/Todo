import "./style.css";
import { addProject } from "./add-cards";
import { showForm } from "./show-form";
import { closeForm } from "./close-form";

const content = document.querySelector("#content");
const dialog = document.getElementById("dialog-Box");
const cancelButton = document.querySelector('button[value="cancel"]');

cancelButton.addEventListener("click", closeForm);

const addMoreProjectsIcon = document
  .querySelector(".add-more-projects")
  .addEventListener("click", showForm);

const addProjectICon = document
  .querySelector("#add-project")
  .addEventListener("click", showForm);
