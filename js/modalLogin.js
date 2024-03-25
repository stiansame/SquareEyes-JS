const updateButton = document.getElementById("loginBtn");
const cancelButton = document.getElementById("cancelBtn");
const dialog = document.getElementById("loginDialog");

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("cancel_login");
  openCheck(dialog);
});