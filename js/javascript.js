const upto = document.querySelector('.up-to');

window.addEventListener('scroll', function(){

    if(window.pageYOffset > 200){
        upto.classList.add('active')
    }
    else{
        upto.classList.remove('active');
    }
})