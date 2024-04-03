import "./style.css";
import { addProject } from "./add-cards";
import { showForm } from "./show-form";
import { closeForm } from "./close-form";
import { preventDefault } from "./form-data";
import { showOptional, showImportant, showExtra } from "./show-cards";

let optionalDiv = document
  .querySelector("#optional")
  .addEventListener("click", showOptional);
let importantDiv = document
  .querySelector("#important")
  .addEventListener("click", showImportant);
let extraDiv = document
  .querySelector("#extra")
  .addEventListener("click", showExtra);

const content = document.querySelector("#content");
const dialog = document.getElementById("dialog-Box");
const cancelButton = document.querySelector('button[value="cancel"]');
const confirmBtn = document.getElementById("confirm");

cancelButton.addEventListener("click", closeForm);
const addMoreProjectsIcon = document
  .querySelector(".add-more-projects")
  .addEventListener("click", showForm);

const addProjectICon = document
  .querySelector("#add-project")
  .addEventListener("click", showForm);

cancelButton.addEventListener("click", closeForm);
confirmBtn.addEventListener("click", preventDefault);
