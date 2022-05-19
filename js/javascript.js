const skew = document.querySelector('.angel');

window.addEventListener('scroll',function(){

    const value = -10 + window.scrollY / 60 ;
    console.log(value)

    skew.style.transform = "skewY("+value+"deg)";
})