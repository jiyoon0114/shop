// 1. 데이터를 배열로 관리

//두번째 페이지 콜렉션 부분
const CollectionPictureAdress = '../img/main/'

const collection_main = [
  {img: `${CollectionPictureAdress}collection1.jfif`},
  {img: `${CollectionPictureAdress}collection2.jfif`},
  {img: `${CollectionPictureAdress}collection3.jfif`},
];

const MainCollection = document.querySelector('.collection-card-box');

//<a class="collection-img-box" style="background-image: url('img/collection1.jfif');">

const collectionParent = document.querySelector('.collection-card-box');  

collection_main.forEach(function(collection){
  const new_card = document.createElement('div');
  new_card.classList.add('collection-card');

  const new_cib = document.createElement('a');
  new_cib.classList.add('collection-img-box');
  new_cib.style = `background-image: url('${collection.img}');`;

  new_card.appendChild(new_cib);

  collectionParent.appendChild(new_card);

  // MainCollection.innerHTML += `
  // <a class="collection-img-box" style="background-image: url('${collection_main.img}');">/a>`;
});



//main 마지막페이지 그리드

const productPictureAdress = 'img/products/'

const product_clothes = [
  { img: `${productPictureAdress}product1.jfif`, name: "상품명1", price: "40,000원", productSold: 1},
  { img: `${productPictureAdress}product2.jfif`, name: "상품명2", price: "50,000원", productSold: 2},
  { img: `${productPictureAdress}product3.jfif`, name: "상품명3", price: "70,000원", productSold: 3},
  { img: `${productPictureAdress}product4.jfif`, name: "상품명4", price: "80,000원",productSold: 4},
  { img: `${productPictureAdress}product5.jfif`, name: "상품명5", price: "90,000원", productSold: 5},
  { img: `${productPictureAdress}product6.jfif`, name: "상품명6", price: "100,000원", productSold: 6},
  { img: `${productPictureAdress}product7.jpg`,  name: "상품명7", price: "110,000원", productSold: 7},
  { img: `${productPictureAdress}product8.jfif`, name: "상품명8", price: "120,000원", productSold: 8},
];

// 2. product-box를 찾아서
/*
  document = 현재 HTML 문서 전체
  .querySelector() = css 선택자로 요소를 찾음
  .product-box + class가 product-box인 요소를 찾음 
  box -> 찾은 div 요소를 담아둠
*/
const MainProductParent = document.querySelector(".product-box");

// 3. 배열을 돌면서 카드를 자동 생성
/*
  forEach = 배열 원소 하나하나에 대해 함수를 반복 실행
  function(product) = 반복마다 현재 원소가 product라는 이름으로 들어옴
*/

product_clothes.forEach(function(product) {
  const new_card = document.createElement('a');
  new_card.classList.add('product-card');

  const new_card_img = document.createElement('img');
  new_card_img.src = product.img;

  const new_product_name = document.createElement('div');
  new_product_name.classList.add('product-name');
  new_product_name.textContent = product.name;

  const new_product_tag = document.createElement('span');
  new_product_tag.classList.add('price-tag');
  new_product_tag.textContent = product.price;

  new_card.appendChild(new_card_img);
  new_card.appendChild(new_product_name);
  new_card.appendChild(new_product_tag);

  MainProductParent.appendChild(new_card);

  // MainProduct.innerHTML += `
  //   <a class="product-card" href="">
  //     <img src="${product.img}" alt="${product.name}">
  //     <div class="product-name">${product.name}</div>
  //     <span class="price-tag">${product.price}</span>
  //   </a>
  // `;
});