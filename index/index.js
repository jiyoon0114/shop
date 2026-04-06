// 1. 데이터를 배열로 관리
const products = [
  { img: "img/product1.jfif", name: "상품명1", price: "40,000원" },
  { img: "img/product2.jfif", name: "상품명2", price: "50,000원" },
  { img: "img/product3.jfif", name: "상품명3", price: "70,000원" },
  { img: "img/product4.jfif", name: "상품명4", price: "80,000원" },
  { img: "img/product5.jfif", name: "상품명5", price: "90,000원" },
  { img: "img/product6.jfif", name: "상품명6", price: "100,000원" },
  { img: "img/product7.jpg",  name: "상품명7", price: "110,000원" },
  { img: "img/product8.jfif", name: "상품명8", price: "120,000원" },
];

// 2. product-box를 찾아서
const box = document.querySelector(".product-box");

// 3. 배열을 돌면서 카드를 자동 생성
products.forEach(function(product) {
  box.innerHTML += `
    <a class="product-card" href="">
      <img src="${product.img}" alt="${product.name}">
      <div class="product-name">${product.name}</div>
      <span class="price-tag">${product.price}</span>
    </a>
  `;
});