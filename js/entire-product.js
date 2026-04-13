import { product } from './product_data.js'

const productTitle = document.querySelector(".product-category-title");
const ClothesProductParent = document.querySelector(".product-box");
const sortedView = document.querySelector('.orblist-order > :nth-child(1)');
const sortedSelling = document.querySelector('.orblist-order > :nth-child(2)');
const sortedPrice = document.querySelector('.orblist-order > :nth-child(3)');
const clothesBtn = document.querySelector('.product-category > :nth-child(1)');
const accbtn = document.querySelector('.product-category > :nth-child(2)');
const glassesBtn = document.querySelector('.product-category > :nth-child(3)');

let category = 'clothes'// 보여줄 제품 카테고리 종류를 category로 설정함 -> 초기값 clothes
let orderby = 'view'; // 제품 정렬 방식 변수

productTitle.textContent = 'Clothes';

//click 시 event 파라미터로 하는 orbyChange_sort함수 실행, 정렬 방식이 달라짐
sortedView.addEventListener('click', (e) => {
  orderby = 'view';
  orbyChange_sort(e, 'orblist-order')
});
sortedSelling.addEventListener('click', (e) => {
  orderby = 'selling';
  orbyChange_sort(e, 'orblist-order')
});
sortedPrice.addEventListener('click', (e) => {
  orderby = 'high';
  orbyChange_sort(e, 'orblist-order')
});

//click시 보여지는 데이터타입 바꾸기
clothesBtn.addEventListener('click', (e) => {
  category = 'clothes';
  productTitle.textContent = 'Clothes';
  orbyChange_sort(e, 'product-category')
});
glassesBtn.addEventListener('click', (e) => {
  category = 'glasses';
  productTitle.textContent = 'Glasses';
  orbyChange_sort(e, 'product-category')
});
accbtn.addEventListener('click', (e) => {
  category = 'acc';
  productTitle.textContent = 'Accessory';
  orbyChange_sort(e, 'product-category')
});

//완전 처음 초기에만 실행 하는 함수
(() => {updateProductList('view', category)})();
(() => {orbyChange_bn2(sortedView, 'orblist-order')})();
(() => {orbyChange_bn2(clothesBtn, 'product-category')})();

//orderby에 따라서 기준을 다르게 데이터 정렬함
function orbyChange_sort(e, parent) {
  orbyChange_bn2(e.target, parent);
  if(orderby === 'view') {
    updateProductList('view', category);
  } else if(orderby === 'selling') {
    updateProductList('selling', category);
  } else if(orderby === 'high') {
    updateProductList('high', category);
  }
}

//target태그에 active 클라스 부여함
function orbyChange_bn2(target, targetParent) { 
  const items = document.querySelectorAll(`.${targetParent} li`);
  items.forEach(li => {
    li.classList.remove('active');
  });
  target.classList.add('active');
}

//orderby = 'view' -> orderby의 초기 디폴트값을 view로 설정
function updateProductList(orderby = 'view') {
  const cpList = [...product];
  let ProductList = cpList.filter(targetProduct => targetProduct.category == category);

  ProductList.sort((item1, item2) => {
    let figure = 0;
    if(orderby === 'view') {
      figure = item2.view - item1.view;
    } else if(orderby === 'selling') {
      figure = item2.selling - item1.selling;
    } else if(orderby === 'high') {
      figure = parseInt(item1.price) - parseInt(item2.price);
    }
    return figure;
  });
  setProductList(ProductList);
}

//정렬된 데이터를 받고 구조 다시 만들기
function setProductList(list) {
  ClothesProductParent.replaceChildren();
  list.forEach(function(product) {
    const new_card = document.createElement('a');
    new_card.classList.add('product-card');
    new_card.classList.add('border-rad');

    const new_card_img = document.createElement('img');
    new_card_img.src = product.img;
    new_card_img.alt = product.name;
    new_card_img.classList.add('border-rad');

    const new_product_name = document.createElement('div');
    new_product_name.classList.add('product-name');
    new_product_name.textContent = product.name;

    const new_product_tag = document.createElement('div');
    new_product_tag.classList.add('price-tag');
    new_product_tag.textContent = product.price;

    new_card.appendChild(new_card_img);
    new_card.appendChild(new_product_name);
    new_card.appendChild(new_product_tag);

    ClothesProductParent.appendChild(new_card);
  });
}