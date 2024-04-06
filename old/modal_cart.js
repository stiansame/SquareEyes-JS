const modal = document.getElementById("AddtoCart");
const openModal = document.getElementById("rent");

const closeModal = document.getElementById("cancelCart");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});



