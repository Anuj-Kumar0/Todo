// ---- storage helpers (same as in add-cards.js) ----
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function editCard(event, task) {
  const dialog = document.getElementById("dialog-Box-Two");
  dialog.showModal();

  // Get the clicked card
  const clickedCard = event.currentTarget.closest("#card");

  if (!clickedCard) {
    console.error("Clicked card not found");
    return;
  }

  // Populate form fields with card values
  const editTitle = document.querySelector("#editTitle");
  const editDueDate = document.querySelector("#editDueDate");

  editTitle.value = task.title;
  editDueDate.value = task.date;

  // --- handle submission ---
  const editButton = document.querySelector("#edit");

  // remove old listeners to prevent duplicates
  const newEditButton = editButton.cloneNode(true);
  editButton.parentNode.replaceChild(newEditButton, editButton);

  newEditButton.addEventListener("click", (e) => {
    e.preventDefault();

    // update task object
    task.title = editTitle.value;
    task.date = editDueDate.value;

    // update DOM
    clickedCard.querySelector(
      "#projectTitle"
    ).textContent = `Title: ${task.title}`;
    clickedCard.querySelector("#dateDiv").textContent = `Date: ${task.date}`;

    // update storage
    let tasks = getTasks();
    tasks = tasks.map((t) => (t.id === task.id ? task : t));
    saveTasks(tasks);

    dialog.close();
  });

  const cancelButton = document.querySelector("#cancelButton");
  cancelButton.addEventListener("click", () => {
    dialog.close("cancel");
  });
}

export { editCard };
