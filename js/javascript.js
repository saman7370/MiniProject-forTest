const h1 = document.querySelector('h1');
const select = document.querySelector('.select');
const btn = document.getElementsByTagName('button');

for(but of btn){
    but.addEventListener('click', function(e){
        const add = Number(h1.getAttribute('data-count') || 0);
        h1.setAttribute('data-count' , add + 1);
        h1.classList.add('zero');

        let parent = e.target.parentNode;
        let clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = 'خرید';
        if(clone){
            h1.onclick = function(){
                select.classList.toggle('display');
            }
        }
    })
}