let title = document.getElementById("title");
let date = document.getElementById("dueDate");

function editCard(event) {
  const dialog = document.getElementById("dialog-Box-Two");
  dialog.showModal();

  // Populate form fields with card values
  const clickedCard = event.currentTarget.parentElement.parentElement;
  const projectTitle = clickedCard.querySelector("#projectTitle").textContent;
  const projectDescription = clickedCard.querySelector("#description");
  const dateDiv = clickedCard.querySelector("#dateDiv").textContent;

  const editTitle = document.querySelector("#editTitle");
  const editDueDate = document.querySelector("#editDueDate");
  const editDescription = document.querySelector("#editDescription");

  editTitle.value = projectTitle.replace("Title: ", "");
  editDueDate.value = dateDiv.replace("Date: ", "");

  // Add event listener to form submission
  dialog.addEventListener("submit", (e) => {
    e.preventDefault();

    // Update the card with new values
    clickedCard.querySelector(
      "#projectTitle"
    ).textContent = `Title: ${editTitle.value}`;
    clickedCard.querySelector(
      "#dateDiv"
    ).textContent = `Date: ${editDueDate.value}`;
    // clickedCard.querySelector("#description").textContent = editDescription;

    // Close the dialog box after submission
    dialog.close();
  });

  const cancelButton = document.querySelector("#cancelButton");
  cancelButton.addEventListener("click", () => {
    dialog.close("cancel");
  });
}

export { editCard };
