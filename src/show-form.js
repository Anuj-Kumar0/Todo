const dialog = document.getElementById("dialog-Box");
let mouseClick = 0;

function showForm() {
  mouseClick += 1;

  console.log(`${mouseClick}`);

  dialog.showModal();
}
export { mouseClick, showForm };
