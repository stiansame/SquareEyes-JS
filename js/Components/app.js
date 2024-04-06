// //iMPORTS
// import { url } from "../script.js";

// //GET ELEMENTS
// const addToCartParentEL = document.querySelector(".description-container");
// const cartEl = document.querySelector("#cart");
// const bodyEl = document.querySelector("body");
// const closeEL = document.querySelector(".cartTab .close");
// const addToCartEl = document.querySelector(".pushToCart");
// const calTotalEl = document.querySelector(".subTotal");

// let listCartHTML = document.querySelector(".cartList");
// let cartCounter = document.querySelector("#counter");
// let products = [];
// let cartItems = [];

// //EVENT LISTENERS
// cartEl.addEventListener("click", () => {
//   bodyEl.classList.toggle("showCart");
//   //   renderSubtotal();
// });

// closeEL.addEventListener("click", () => {
//   bodyEl.classList.toggle("showCart");
// });

// addToCartParentEL.addEventListener("click", (event) => {
//   let locateClick = event.target;
//   if (locateClick.classList.contains("PushToCart")) {
//     const product_id = locateClick.parentElement.dataset.id;
//     console.log(product_id);
//     placeInCart(product_id);
//   }
// });

// //ADD TO PRODUCT LIST

// //ADD TO CART

// const placeInCart = (product_id) => {
//   let locateThisProductInCart = cartItems.findIndex((value) => value.product_id === product_id);
//   if (cartItems.length <= 0) {
//     cartItems = [
//       {
//         product_id: product_id,
//         quantity: 1,
//       },
//     ];
//   } else if (locateThisProductInCart < 0) {
//     cartItems.push({
//       product_id: product_id,
//       quantity: 1,
//     });
//   } else {
//     alert("Product is already in cart!");
//   }
//   renderCart();
// };

// //RENDER CART
// const renderCart = () => {
//   listCartHTML.innerHTML = "";
//   let totalQuantity = 0;
//   if (cartItems.length > 0) {
//     cartItems.forEach((kit) => {
//       totalQuantity = totalQuantity + cart.quantity;
//       const newCart = document.createElement("div");
//       newCart.classList.add("cartItem");
//       let positionProduct = products.findIndex((vv) => vv.id == kit.product_id);
//       let info = products[positionProduct];
//       newCart.innerHTML = `<div class="movie">
//                                 <img src="${info.image.url}" alt="">
//                                 </div>
//                                 <div class="title">${info.title}</div>
//                                 <div class="price"><b>Price:</b>Kr ${info.discountedPrice}</div>
//                                 `;
//       listCartHTML.appendChild(newCart);
//     });
//   }
//   cartIconCounter.innerText = totalQuantity;
//   console.log("incart: ", cartItems);
// };

// //GET DATA FROM API
// function initialize() {
//   fetch(url)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       products = data;
//       console.log(products);
//     });
// }

// // async function initialize() {
// //   const apiCall = await fetch(url);
// //   const apiJSON = await apiCall.json();
// //   const apiProducts = apiJSON.data;
// //   products = apiProducts;

// //   console.log("apiProducts: ", apiProducts);
// // }

// initialize();
