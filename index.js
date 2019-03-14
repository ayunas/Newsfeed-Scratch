const menu = document.querySelector('nav');
console.log(menu);

const hamburger = document.querySelector('#hamburger');



hamburger.addEventListener('click', () => { menu.classList.toggle('open');
console.log('clicked!');
});

const button = document.querySelector('button');


const article = document.querySelectorAll('article');


button.addEventListener('click', () => {
    article[0].classList.toggle('collapse');
    
    if (button.textContent === 'collapse') {
        button.textContent = 'expand';
    } else {
         button.textContent = 'collapse';
    }
});







