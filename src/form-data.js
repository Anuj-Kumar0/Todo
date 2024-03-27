import { addProject } from "./add-cards";

const dialog = document.getElementById("dialog-Box");
const description = document.getElementById("description");

function addDataToCard() {
  addProject();

  const card = document.getElementById("card");
  let cardTitle = document.getElementById("projectTitle");
  let cardDate = document.getElementById("dateDiv");

  let formTitle = document.getElementById("title");
  let formDate = document.getElementById("dueDate");

  console.log("hello world");

  if (cardTitle) {
    cardTitle.textContent = `Title: ${formTitle.value}`;
  } else {
    console.error("Card title element not found");
  }

  if (cardDate) {
    cardDate.textContent = `Date: ${formDate.value}`;
  } else {
    console.error("Card date element not found");
  }

  formTitle.value = "";
  formDate.value = "";
  description.value = "";
}

function preventDefault(event) {
  event.preventDefault();
  if (document.forms[0].checkValidity()) {
    addDataToCard();
    dialog.close("cancel");
  } else {
    alert("Please Fill All The Fields");
  }
}

export { preventDefault };
