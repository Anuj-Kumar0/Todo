import { addProject } from "./add-cards";

const dialog = document.getElementById("dialog-Box");

function addDataToCard() {
  addProject();

  const card = document.getElementById("card");
  const cardTitle = document.getElementById("projectTitle");
  const cardDate = document.getElementById("dateDiv");
  const cardCompleteIcon = document.getElementById("completedIcon");

  const formTitle = document.getElementById("title").value;
  const formDate = document.getElementById("dueDate").value;

  console.log("hello world");

  if (cardTitle) {
    cardTitle.textContent = `Title: ${formTitle}`;
  } else {
    console.error("Card title element not found");
  }

  if (cardDate) {
    cardDate.textContent = `Limit:${formDate}`;
  } else {
    console.error("Card date element not found");
  }
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
