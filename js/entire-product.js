import { product_clothes } from './product_data.js'

const MainProductParent = document.querySelector(".product-box");

// product_clothes.forEach(function(product) {
//   const new_card = document.createElement('a');
//   new_card.classList.add('product-card');
//   new_card.classList.add('border-rad');

//   const new_card_img = document.createElement('img');
//   new_card_img.src = product.img;
//   new_card_img.alt = product.name;
//   new_card_img.classList.add('border-rad');

//   const new_product_name = document.createElement('div');
//   new_product_name.classList.add('product-name');
//   new_product_name.textContent = product.name;

//   const new_product_tag = document.createElement('div');
//   new_product_tag.classList.add('price-tag');
//   new_product_tag.textContent = product.price;


//   new_card.appendChild(new_card_img);
//   new_card.appendChild(new_product_name);
//   new_card.appendChild(new_product_tag);

//   MainProductParent.appendChild(new_card);
// });

// function orbyChange_bn(element) { 
//   // 여기서 element는 클릭된 <li> 태그 자체를 의미합니다. (HTML에서 보낸 'this')

//   /* [단계 1] 청소하기 (Reset) */
//   // 문서 전체에서 '.orblist-order' 안에 있는 모든 'li'를 다 찾아와서 'items'라는 변수에 담습니다.
//   const items = document.querySelectorAll('.orblist-order li');

//   // 찾아온 모든 li들을 하나씩 반복(forEach)하면서 검사합니다.
//   items.forEach(li => {
//     // 이미 'active' 클래스를 가진 녀석이 있다면 가차 없이 지워버립니다.
//     // 이 과정이 없으면 클릭하는 족족 모든 항목에 색이 들어오게 됩니다. (하나만 선택 안 됨)
//     li.classList.remove('active');
//   });

//   /* [단계 2] 강조하기 (Set) */
//   // 이제 방금 클릭당한 그 녀석(element)에게만 'active'라는 클래스 이름을 붙여줍니다.
//   // 그러면 아까 CSS에서 설정한 화려한 배경색과 그림자가 즉시 나타납니다.
//   element.classList.add('active');

//   const sortOption = element.textContent;

//   if (sortOption == 'Most Viewed') {

//   }
//   else if (sortOption == 'Best Selling') {

//   }
//   else if (sortOption == 'Low to High') {

//   }
// }

// window.orbyChange_bn = orbyChange_bn;



// ------------------------------------------------------------------
const child1 = document.querySelector('.orblist-order > :nth-child(1)');
const child2 = document.querySelector('.orblist-order > :nth-child(2)');
const child3 = document.querySelector('.orblist-order > :nth-child(3)');

//완전 처음 초기에만 실행 하는 함수
(() => {productListSort()})();
(() => {orbyChange_bn2(child1)})();

child1.addEventListener('click', (e) => orbyChange_sort(e, 'view'));
child2.addEventListener('click', (e) => orbyChange_sort(e, 'selling'));
child3.addEventListener('click', (e) => orbyChange_sort(e, 'high'));

function orbyChange_sort(e, orderby) {
  orbyChange_bn2(e.target);
  
  if(orderby === 'view') {
    productListSort('view');
  } else if(orderby === 'selling') {
    productListSort('selling');
  } else if(orderby === 'high') {
    productListSort('high');
  }
}

function orbyChange_bn2(target) { 
  const items = document.querySelectorAll('.orblist-order li');

  items.forEach(li => {
    li.classList.remove('active');
  });

  target.classList.add('active');
}

//orderby = 'view' -> orderby의 초기 디폴트값을 view로 설정
function productListSort(orderby = 'view') {
  const cpList = [...product_clothes];

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

function setProductList(list) {
  MainProductParent.innerHTML = '';

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

    MainProductParent.appendChild(new_card);
  });
}