const icon = document.querySelector('.icon');
const nav = document.querySelector('nav');

icon.addEventListener('click', function(){

    icon.classList.toggle('active');

    nav.classList.toggle('active');
})