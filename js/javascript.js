const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu.addEventListener('click', openNav );

function openNav(){
    toggleMenu.classList.toggle('active');
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');

    if(nav.classList.contains('open')){
        nav.style.height = nav.scrollHeight + "px"
    }else{
        nav.style.height = "0";
    }
}