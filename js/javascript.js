const ul = document.querySelector('ul').children;
const items = document.querySelector('.items').children;

for(let i = 0; i < ul.length; i++){

    ul[i].onclick = function(){
     
    for(let x = 0; x < ul.length; x++){
        ul[x].classList.remove('active');
    }

    ul[i].classList.add('active');

    const displayItem = this.getAttribute('data-filter');

    for(let z =0; z < items.length; z++){

        items[z].style.transform = 'scale(0)';
        setTimeout(() => {
            items[z].style.display = 'none';
        }, 500);

        if(items[z].getAttribute('data-category') == displayItem || displayItem == 'all'){
            items[z].style.transform = 'scale(1)';
            setTimeout(() => {
                items[z].style.display = 'block';
            }, 500);
        }
    }
}
}