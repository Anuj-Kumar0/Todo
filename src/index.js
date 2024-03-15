import "./style.css";
import { addProject } from "./add-cards";

const content = document.querySelector("#content");
const addMoreProjectsIcon = document
  .querySelector(".add-more-projects")
  .addEventListener("click", addProject);
const addProjectICon = document
  .querySelector("#add-project")
  .addEventListener("click", addProject);
