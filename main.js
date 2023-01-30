"use strict";

const saveButton = document.querySelector("#save-button");
const downloadButton = document.querySelector("#download-button");
const textEditor = document.querySelector("textarea");

window.onload = () => {
  textEditor.value = localStorage.getItem("text");
}

function saveText() {
  let textContent = textEditor.value;
  localStorage.setItem("text", textContent);
  console.log("Saved text in localStorage!");

  saveButton.style.borderColor = "green";
  setTimeout(() => {
    saveButton.style.borderColor = "transparent";
  }, 2000);
}

function generateFile() {
  let fileData = textEditor.value;

  let file = new Blob([fileData], {type: "text/plain;"});
  
  downloadButton.href = URL.createObjectURL(file);
  downloadButton.download = "text.txt";
}

saveButton.addEventListener("click", () => {
  saveText();
});

downloadButton.addEventListener("click", () => {
  generateFile();
});

