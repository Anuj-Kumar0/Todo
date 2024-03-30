import { addProject } from "./add-cards";

const dialog = document.getElementById("dialog-Box");

function preventDefault(event) {
  event.preventDefault();
  if (document.forms[0].checkValidity()) {
    addProject();
    dialog.close("cancel");
  } else {
    alert("Please Fill All The Fields");
  }
}

export { preventDefault };
