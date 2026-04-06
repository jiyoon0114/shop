const productPictureAddress = '/img/products/';

const product_clothes = [
  { img: `${productPictureAddress}product1.jfif`, name: "상품명1", price: "40,000원", },
  { img: `${productPictureAddress}product2.jfif`, name: "상품명2", price: "50,000원" },
  { img: `${productPictureAddress}product3.jfif`, name: "상품명3", price: "70,000원" },
  { img: `${productPictureAddress}product4.jfif`, name: "상품명4", price: "80,000원" },
  { img: `${productPictureAddress}product5.jfif`, name: "상품명5", price: "90,000원" },
  { img: `${productPictureAddress}product6.jfif`, name: "상품명6", price: "100,000원" },
  { img: `${productPictureAddress}product7.jpg`,  name: "상품명7", price: "110,000원" },
  { img: `${productPictureAddress}product8.jfif`, name: "상품명8", price: "120,000원" },
  { img: `${productPictureAddress}product9.jpg`, name: "상품명9", price: "130,000원" },
  { img: `${productPictureAddress}product10.jpg`, name: "상품명10", price: "130,000원" },
  { img: `${productPictureAddress}product11.jpg`, name: "상품명11", price: "130,000원" },
  { img: `${productPictureAddress}product12.jpg`, name: "상품명12", price: "130,000원" },
  { img: `${productPictureAddress}product13.jpg`, name: "상품명13", price: "130,000원" },
  { img: `${productPictureAddress}product14.jpg`, name: "상품명14", price: "130,000원" },
  { img: `${productPictureAddress}product15.jpg`, name: "상품명15", price: "130,000원" },
];

const MainProductParent = document.querySelector(".product-box");

product_clothes.forEach(function(product) {
  const new_card = document.createElement('a');
  new_card.classList.add('product-card');

  const new_card_img = document.createElement('img');
  new_card_img.src = product.img;
  new_card_img.alt = product.name;

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
});