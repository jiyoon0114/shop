import { product } from './product_data.js'

// 2. product-box를 찾아서
/*
  document = 현재 HTML 문서 전체
  .querySelector() = css 선택자로 요소를 찾음
  .product-box + class가 product-box인 요소를 찾음 
  box -> 찾은 div 요소를 담아둠
*/
const MainProductParent = document.querySelector(".product-box");
let category = 'clothes';
chooseList(); 

const selectBtnClothes = document.querySelectorAll('header > ul > li');

selectBtnClothes[0].addEventListener('click',() => {
  category = 'clothes';
  chooseList();
});
selectBtnClothes[1].addEventListener('click', () => {
  category = 'glasses';
  chooseList();
});
selectBtnClothes[2].addEventListener('click', () => {
  category = 'acc';
  chooseList();
});

// 1. 데이터를 배열로 관리

//두번째 페이지 콜렉션 부분
const CollectionPictureAdress = '../img/main/'

const collection_main = [
  {img: `${CollectionPictureAdress}collection1.jfif`},
  {img: `${CollectionPictureAdress}collection2.jfif`},
  {img: `${CollectionPictureAdress}collection3.jfif`},
];

const collectionParent = document.querySelector('.collection-card-box');  

collection_main.forEach(function(collection){
  const new_card = document.createElement('div');
  new_card.classList.add('collection-card');

  const new_cib = document.createElement('a');
  new_cib.classList.add('collection-img-box');
  new_cib.style = `background-image: url('${collection.img}');`;

  new_card.appendChild(new_cib);

  collectionParent.appendChild(new_card);
});


//main 마지막페이지 그리드

function chooseList() {
  const cpList = [...product].filter((item) => item.category === category);
  const top8 = cpList.sort((a, b) => b.selling - a.selling).slice(0, 8);
  updateList(top8);
}


// 3. 배열을 돌면서 카드를 자동 생성
/*
  forEach = 배열 원소 하나하나에 대해 함수를 반복 실행
  function(product) = 반복마다 현재 원소가 product라는 이름으로 들어옴
*/
function updateList(list) {
  MainProductParent.replaceChildren();
  list.forEach(function(product) {
    const new_card = document.createElement('a');
    new_card.classList.add('product-card');
  
    const new_card_img = document.createElement('img');
    new_card_img.src = product.img;
  
    const new_product_name = document.createElement('div');
    new_product_name.classList.add('product-name');
    new_product_name.textContent = product.name;
  
    const new_product_tag = document.createElement('div');
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
}
