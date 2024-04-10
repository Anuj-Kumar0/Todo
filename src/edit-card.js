let title = document.getElementById("title");
let date = document.getElementById("dueDate");

function editCard(event) {
  // Show the dialog box
  const dialog = document.getElementById("dialog-Box");
  dialog.showModal(); // Show the dialog box

  // Populate form fields with card values
  const clickedCard = event.currentTarget;
  const projectTitle = clickedCard.querySelector("#projectTitle").textContent;
  const dateDiv = clickedCard.querySelector("#dateDiv").textContent;

  // Add event listener to form submission
  dialog.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Update the card with new values
    clickedCard.querySelector(
      "#projectTitle"
    ).textContent = `Title: ${title.value}`;
    clickedCard.querySelector("#dateDiv").textContent = `Date: ${date.value}`;

    // Close the dialog box after submission
    dialog.close();
  });
}

export { editCard };
