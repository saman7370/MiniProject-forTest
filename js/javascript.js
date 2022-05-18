const open = document.querySelector('.open');

const close = document.querySelector('.close');

const containerModal = document.querySelector('.container-modal');

 open.addEventListener('click',function(){

    containerModal.classList.add('show');
 })

 close.addEventListener('click',function(){

    containerModal.classList.remove('show');
 })