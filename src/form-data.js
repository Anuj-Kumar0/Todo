function addDataToCard() {
  console.log("hello world");
}

function preventDefault(event) {
  event.preventDefault();
  if (document.forms[0].checkValidity()) {
    addDataToCard();
  } else {
    alert("Please fill in all required fields.");
  }
}

export { preventDefault };
