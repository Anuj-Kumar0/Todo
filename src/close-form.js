const title = document.getElementById("title");
const description = document.getElementById("description");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");
const dialog = document.getElementById("dialog-Box");

function closeForm() {
  dialog.close("cancel");
}

export { closeForm };
