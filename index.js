const menu = document.querySelector('nav');
console.log(menu);

const hamburger = document.querySelector('#hamburger');



hamburger.addEventListener('click', () => { menu.classList.toggle('open');
console.log('clicked!');
});

const button = document.querySelectorAll('button');



const article = document.querySelectorAll('article');


button.forEach( but => {
    
    but.addEventListener('click', () => {
//    article[0].classList.toggle('collapse');
    
    article.forEach( art => art.classList.toggle('collapse'));
        
    
    
    if (but.textContent === 'collapse') {
        but.textContent = 'expand';
    } else {
         but.textContent = 'collapse';
    }
    })
})
    
    
    



//button[0].addEventListener('click', () => {
////    article[0].classList.toggle('collapse');
//    
//    article.forEach( art => art.classList.toggle('collapse'));
//    
//    if (button[0].textContent === 'collapse') {
//        button[0].textContent = 'expand';
//    } else {
//         button[0].textContent = 'collapse';
//    }
//})
