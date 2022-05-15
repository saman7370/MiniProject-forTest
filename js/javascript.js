const boxWarnning = document.querySelector('.box-warnning');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close-btn');
let timer;

btn.addEventListener('click',function(){
    showAlertBox();
})

close.addEventListener('click',function(){
    hidenAlert();
    clearTimeout(timer);
})

function showAlertBox(){
    boxWarnning.classList.add('show');
    if(boxWarnning.classList.contains('hiden')){
        boxWarnning.classList.remove('hiden')
    }
    timer = setTimeout(() => {
        hidenAlert();
        
    }, 5000);

}

function hidenAlert(){
    boxWarnning.classList.remove('show');
    boxWarnning.classList.add('active');

}