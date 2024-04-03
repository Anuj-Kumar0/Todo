import { optional, important, extra } from "./add-cards";

function showOptional() {
  optional.forEach((item) => {
    item.style.display = "grid";
  });

  important.forEach((item) => {
    item.style.display = "none";
  });

  extra.forEach((item) => {
    item.style.display = "none";
  });
}

function showImportant() {
  optional.forEach((item) => {
    item.style.display = "none";
  });

  important.forEach((item) => {
    item.style.display = "grid";
  });

  extra.forEach((item) => {
    item.style.display = "none";
  });
}

function showExtra() {
  optional.forEach((item) => {
    item.style.display = "none";
  });

  important.forEach((item) => {
    item.style.display = "none";
  });

  extra.forEach((item) => {
    item.style.display = "grid";
  });
}

export { showOptional, showImportant, showExtra };
