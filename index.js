let saveButtonEl = document.getElementById("saveButton");
let inputTextEl = document.getElementById("inputText");

saveButtonEl.onclick = function () {
  let textValue = inputTextEl.value;
  if (textValue === "") {
    textValue = localStorage.getItem("yourstory", textValue);
  } else {
    textValue = localStorage.setItem("yourstory", textValue);
  }
};
