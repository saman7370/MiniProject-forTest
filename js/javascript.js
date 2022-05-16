const open = document.querySelector('.openmenu');
const close = document.querySelector('.closemenu');
const layers = document.querySelector('.layer1');

open.onclick = ()=>{
    layers.classList.add('check');
}

close.onclick = ()=>{
    layers.classList.remove('check');
}