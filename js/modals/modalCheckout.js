const openCheckoutModal = document.querySelector(".checkOut");
let modalRenderer = document.querySelector(".popper");

const closeCheckoutModal = document.getElementById("closeBtn");

openCheckoutModal.addEventListener("click", () => {
  renderCheckoutModal();
});

function renderCheckoutModal() {
  modalRenderer.innerHTML = `
  <dialog class="modal" id="checkoutDialog">
    <div class="popup">
      <h3>Thank you for your purchase! </h3>
      <div class="popup-content" id="checkoutmodal">
        <p class="desc">What do you want to do next?</p>
        <a href="../pages/movies.html">
          <div class="cta_button" id="closeBtn">
            Browse Movies
          </div>
        </a>
        <a href="../pages/mypage.html">
          <div class="cta_button">Library</div>
        </a>
        <a href="../pages/player.html">
          <div class="cta_button">Play movie</div>
        </a>
      </div>
    </div>
  </dialog>;
  `;
  const checkoutModal = document.getElementById("checkoutDialog");
  checkoutModal.showModal();
}
