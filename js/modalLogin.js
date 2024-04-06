const updateButton = document.getElementById("loginBtn");
const cancelButton = document.getElementById("cancelBtn");
const dialog = document.getElementById("loginDialog");

// Update button opens a modal dialog
updateButton.addEventListener("click", () => {
  dialog.showModal();
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("cancel_login");
});
