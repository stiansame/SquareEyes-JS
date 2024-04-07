const logoutButton = document.querySelector("#logoutBtn");
let modalRenderer = document.querySelector(".popper");

// Update button opens a modal dialog
logoutButton.addEventListener("click", () => {
  logoutdialog.showModal();
});

function renderLogoutModal() {
  modalRenderer.innerHTML = `
  <dialog class="modal" id="logoutDialog">
    <div class="popup" id="logout">
      <h3>Logged out! </h3>
      <div class="popup-content">
        <a href="../index.html">
          <div class="cta_button">Browse</div>
        </a>
      </div>
    </div>
  </dialog>
  `;

  const stopButton = document.querySelector("#stopBtn");
  const logoutdialog = document.querySelector("#logoutDialog");
}
