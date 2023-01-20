function openMenu(){
    var menu = document.querySelector('.header_top');
    var btn = document.querySelector('.header_top_mobil img:nth-child(2)');
    var isOpenMenu = menu.getAttribute('data-open');
    if(isOpenMenu === 'false'){
        menu.style.right = '0%';
        menu.setAttribute('data-open', 'true')
    } else {
        menu.style.right = '-100%';
        btn.innerHTML = '';
        menu.setAttribute('data-open', 'false')
    }
}


function openProduct(){
    var menu = document.querySelector('.header_bottom');
    var isopenProduct = menu.getAttribute('data-open');
    if(isopenProduct === 'false'){
        menu.style.right = '0%';
        menu.setAttribute('data-open', 'false')
    } else {
        menu.style.right = '-100%';
        menu.setAttribute('data-open', 'true')
    }
}
function closeProduct(){
    var menu = document.querySelector('.header_bottom');
    var btn = document.querySelector('.header_bottom .button_mobil i');
    var iscloseProduct = menu.getAttribute('data-close');
    if(iscloseProduct === 'false'){
        menu.style.right = '0%';
        btn.innerHTML = '';
        menu.setAttribute('data-close', 'false')
    }  else {
        menu.style.right = '-100%';
        menu.setAttribute('data-close', 'true')
    }
}


function openFilter(){
    var menu = document.querySelector('.form');
    var isopenFilter = menu.getAttribute('data-open');
    if(isopenFilter === 'false'){
        menu.style.right = '0%';
        menu.setAttribute('data-open', 'false')
    } else {
        menu.style.right = '-100%';
        menu.setAttribute('data-open', 'true')
    }
}
function closeFilter(){
    var menu = document.querySelector('.form');
    var btn = document.querySelector('.filter_form .button_i i');
    var iscloseFilter = menu.getAttribute('data-close');
    if(iscloseFilter === 'false'){
        menu.style.right = '0%';
        btn.innerHTML = '';
        menu.setAttribute('data-close', 'false')
    }  else {
        menu.style.right = '-100%';
        menu.setAttribute('data-close', 'true')
    }
}


function openSorting(){
    var menu = document.querySelector('.filter_price');
    var isopenSorting = menu.getAttribute('data-open');
    if(isopenSorting === 'false'){
        menu.style.right = '0%';
        menu.setAttribute('data-open', 'false')
    } else {
        menu.style.right = '-100%';
        menu.setAttribute('data-open', 'true')
    }
}
function closeSorting(){
    var menu = document.querySelector('.filter_price');
    var btn = document.querySelector('.filter_price .button_i i');
    var iscloseSorting = menu.getAttribute('data-close');
    if(iscloseSorting === 'false'){
        menu.style.right = '0%';
        btn.innerHTML = '';
        menu.setAttribute('data-close', 'false')
    }  else {
        menu.style.right = '-100%';
        menu.setAttribute('data-close', 'true')
    }
}






// var products1 = [
//     {
//         id: 1,
//         discount: true,
//         recommendation: true,
//         imgClassName: 'img1',
//         title: 'Доска Бильгоу для<br> мозжечковой стимуляции',
//         text: 'Тренажеров для мозжечковой<br> стимуляции.',
//         newPrice: '2 490 р.',
//         oldPrice: '3 470 р.'
//     },
//     {
//         id: 2,
//         discount: true,
//         recommendation: true,
//         imgClassName: 'img2',
//         title: 'Доска Бильгоу для<br> мозжечковой стимуляции',
//         text: 'Тренажеров для мозжечковой<br> стимуляции.',
//         newPrice: '1 134 900 ₽',
//         oldPrice: '1 234 567 ₽'
//     },
//     {
//         id: 3,
//         discount: true,
//         recommendation: true,
//         imgClassName: 'img3',
//         title: 'Доска Бильгоу для<br> мозжечковой стимуляции',
//         text: 'Тренажеров для мозжечковой<br> стимуляции.',
//         newPrice: '1 134 900 ₽',
//         oldPrice: '1 234 567 ₽'
//     },
//     {
//         id: 4,
//         discount: true,
//         recommendation: true,
//         imgClassName: 'img4',
//         title: 'Доска Бильгоу для<br> мозжечковой стимуляции',
//         text: 'Тренажеров для мозжечковой<br> стимуляции.',
//         newPrice: '1 134 900 ₽',
//         oldPrice: '1 234 567 ₽'
//     },
   
      
// ];

// var ul = document.querySelector('.productsmonth ul');

// var str = ''


// for(var i=0; i<products1.length; i++){

//     // var ratingHtml = ''

//     // for(var j=0; j<products[i].rating; j++){
//     //     ratingHtml+='<span></span>'
//     // }

//     str += `<li class="${products1[i].imgClassName}">
//     ${products1[i].discount ? ' <span>-30%</span>>': ''}
//     ${products1[i].recommendation ? '<span>Рекомендуем</span>': ''}
    
//     <img src="img/toy_BilgouBoard.svg" alt="toy Bilgou Board">

//     <h3>${products1[i].title}</h3>
//     <p>${products1[i].text}</p>
//     <div class="price">
//         <p>${products1[i].newPrice}</p>
//         <p>${products1[i].oldPrice}</p>
//     </div>
//     <div class="buy">
//         <span>1</span>
//         <img src="img/Vector_top_buttom.svg" alt="Vector top buttom">
//         <button>Купить</button>
//     </div>   
//     <a href="#">Подробнее</a>
//     </li>`
// }


// ul.innerHTML = str;


{/* 

var ul = document.querySelector('.products div');

var str = ''

for(var i=0; i<products.length; i++){

    var ratingHtml = ''

    for(var j=0; j<products[i].rating; j++){
        ratingHtml+='<span></span>'
    }

    str += `<li class="${products[i].imgClassName}">
    <div class="stock__card--left">
        ${products[i].discount ? '<img src="img/sale.svg" alt="sale">': ''}
        ${products[i].recommendation ? '<img src="img/good.svg" alt="good">': ''}
        ${products[i].new ? '<img src="img/new.svg" alt="new">': ''}
    </div>
    <div class="stock__card--right">
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
            <rect y="7.5" width="2" height="10" rx="1" fill="#abb0be"/>
            <rect x="5" y="0.5" width="2" height="17" rx="1" fill="#abb0be"/>
            <rect x="10" y="7.5" width="2" height="10" rx="1" fill="#abb0be"/>
            <rect x="15" y="4.5" width="2" height="13" rx="1" fill="#abb0be"/>
            </g>
        </svg>
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0718 1.96031C19.4616 -0.649176 15.2154 -0.649176 12.6059 1.96031L11.9998 2.56606L11.394 1.96031C8.78455 -0.64953 4.53795 -0.64953 1.92847 1.96031C-0.628032 4.51681 -0.644633 8.56914 1.88997 11.3867C4.2017 13.9555 11.0196 19.5054 11.3089 19.7403C11.5053 19.9 11.7416 19.9777 11.9765 19.9777C11.9842 19.9777 11.992 19.9777 11.9994 19.9773C12.2424 19.9886 12.4872 19.9053 12.6899 19.7403C12.9792 19.5054 19.7979 13.9555 22.1103 11.3863C24.6445 8.56914 24.6279 4.51681 22.0718 1.96031ZM20.535 9.96889C18.7326 11.9712 13.7782 16.1009 11.9994 17.5663C10.2207 16.1013 5.26732 11.9719 3.46527 9.96925C1.69712 8.00401 1.68052 5.20521 3.42677 3.45896C4.31861 2.56747 5.48984 2.12137 6.66107 2.12137C7.8323 2.12137 9.00354 2.56711 9.89538 3.45896L11.2277 4.79125C11.3863 4.94984 11.5862 5.0445 11.796 5.0777C12.1365 5.15081 12.5059 5.0558 12.7708 4.7916L14.1038 3.45896C15.8879 1.67562 18.7898 1.67598 20.5728 3.45896C22.319 5.20521 22.3024 8.00401 20.535 9.96889Z" fill="${products[i].like ? 'red':'#abb0be'}"/>
        </svg>
    </div>
    
    <div class="clearfix"></div>
    
    <div>
        <p class="availability" style="color: ${products[i].inStock ? 'green' : 'red' }">
            ${products[i].inStock ? 'В наличии': 'Нет в наличии'}
            ${products[i].inStock ? '<span></span> <span></span> <span></span>':''}
            <span class="other">Есть в шоу-руме</span>
        </p>
        <p class="title">${products[i].title}</p>
        <p class="rating">
            Рейтинг
            ${ratingHtml}
        </p>.menu__icons li:last-childiv>
                <p class="current__price">${products[i].newPrice}</p>
                <p class="old__price">${products[i].oldPrice}</p>
            </div>
            <button>Купить</button>
        </div>
    </div>
    </li>` 
}

ul.innerHTML = str;

 */}


