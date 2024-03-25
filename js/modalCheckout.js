const checkoutModal = document.getElementById("checkoutDialog");
const openCheckoutModal = document.getElementById("purchase");

const closeCheckoutModal = document.getElementById("closeBtn");

openCheckoutModal.addEventListener("click", () => {
  checkoutModal.showModal();
});

closeCheckoutModal.addEventListener("click", () => {
  checkoutModal.close();
});