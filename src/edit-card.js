let title = document.getElementById("title");
let date = document.getElementById("dueDate");

function editCard(event) {
  const dialog = document.getElementById("dialog-Box-Two");
  dialog.showModal();

  // Get the clicked card
  const clickedCard = event.currentTarget.closest("#card");

  if (!clickedCard) {
    console.error("Clicked card not found");
    return;
  }

  // Populate form fields with card values
  const projectTitle = clickedCard.querySelector("#projectTitle").textContent;
  const dateDiv = clickedCard.querySelector("#dateDiv").textContent;

  const editTitle = document.querySelector("#editTitle");
  const editDueDate = document.querySelector("#editDueDate");

  editTitle.value = projectTitle.replace("Title: ", "");
  editDueDate.value = dateDiv.replace("Date: ", "");

  // Add event listener to form submission
  dialog.addEventListener("submit", (e) => {
    e.preventDefault();

    // Update the clicked card with new values
    clickedCard.querySelector(
      "#projectTitle"
    ).textContent = `Title: ${editTitle.value}`;
    clickedCard.querySelector(
      "#dateDiv"
    ).textContent = `Date: ${editDueDate.value}`;

    // Close the dialog box after submission
    dialog.close();
  });

  const cancelButton = document.querySelector("#cancelButton");
  cancelButton.addEventListener("click", () => {
    dialog.close("cancel");
  });
}

export { editCard };
