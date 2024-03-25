const logoutButton = document.getElementById("logoutBtn");
const stopButton = document.getElementById("stopBtn");
const logoutdialog = document.getElementById("logoutDialog");

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// Update button opens a modal dialog
logoutButton.addEventListener("click", () => {
  logoutdialog.showModal();
  openCheck(dialog);
});

// Form cancel button closes the dialog box
stopButton.addEventListener("click", () => {
  logoutdialog.close("cancel_login");
  openCheck(dialog);
});