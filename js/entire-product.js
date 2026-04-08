import { product_clothes, product_glasses, product_Acc } from './product_data.js'

const ClothesProductParent = document.querySelector(".product-box");

const sortedView = document.querySelector('.orblist-order > :nth-child(1)');
const sortedSelling = document.querySelector('.orblist-order > :nth-child(2)');
const sortedPrice = document.querySelector('.orblist-order > :nth-child(3)');

const clothesBtn = document.querySelector('.product-category > :nth-child(1)');
const accbtn = document.querySelector('.product-category > :nth-child(2)');
const glassesBtn = document.querySelector('.product-category > :nth-child(3)');

let category = product_clothes // 보여줄 제품 카테고리 종류를 category로 설정함
let orderby = 'view'; // 제품 정렬 방식 변수

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



clothesBtn.addEventListener('click', (e) => {
  category = product_clothes;
  orbyChange_sort(e, 'product-category')
});
glassesBtn.addEventListener('click', (e) => {
  category = product_glasses;
  orbyChange_sort(e, 'product-category')
});
accbtn.addEventListener('click', (e) => {
  category = product_Acc;
  orbyChange_sort(e, 'product-category')
});

//완전 처음 초기에만 실행 하는 함수
(() => {productListSort('view', category)})();
(() => {orbyChange_bn2(sortedView, 'orblist-order')})();
(() => {orbyChange_bn2(clothesBtn, 'product-category')})();

//orderby에 따라서 기준을 다르게 데이터 정렬함
function orbyChange_sort(e, parent) {

  orbyChange_bn2(e.target, parent);
  
  if(orderby === 'view') {
    productListSort('view', category);
  } else if(orderby === 'selling') {
    productListSort('selling', category);
  } else if(orderby === 'high') {
    productListSort('high', category);
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
function productListSort(orderby = 'view', catogory) {
  const cpList = [...catogory];

  cpList.sort((item1, item2) => {
    let figure = 0;
    if(orderby === 'view') {
      figure = item2.view - item1.view;
    } else if(orderby === 'selling') {
      figure = item2.selling - item1.selling;
    } else if(orderby === 'high') {
      figure = item1.price - item2.price;
    }
    return figure;
  });

  setProductList(cpList);
}

//정렬된 데이터를 보고 구조 다시 만들기
function setProductList(list) {
  ClothesProductParent.innerHTML = '';

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