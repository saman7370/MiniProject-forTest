const allbox = document.querySelector('.content').children;
const boxWidth = allbox[0].querySelector('.ineer').offsetWidth;
const boxHeight = allbox[0].querySelector('.ineer').offsetHeight;

const div = document.createElement('div');
div.style.position = "absolute";
div.style.width = boxWidth + "px";
div.style.height = boxHeight + "px";
div.style.backgroundColor = "#f50057";
div.style.transition = "all 1s ease";
div.style.left = allbox[0].querySelector('.ineer').offsetLeft + 'px';
div.style.top = allbox[0].querySelector('.ineer').offsetTop + 'px';
document.querySelector('.header').appendChild(div);

for(let i = 0; i < allbox.length; i++){
    allbox[i].addEventListener('click', function(){
        const x = this.offsetLeft;
        const y = this.offsetTop;
        div.style.left = x + "px";
        div.style.top = y + 'px';
        const width = this.offsetWidth;
        const height = this.offsetHeight;
        div.style.width = width + "px";
        div.style.height = height + "px";
    })
}
