const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
menu.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    menu.classList.toggle('bx-x')
    
})

