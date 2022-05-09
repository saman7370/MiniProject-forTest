const title = document.querySelectorAll('.accordion-title');

title.forEach(item =>{
    item.addEventListener('click', function(){
        item.classList.toggle('active');
        const content = item.nextElementSibling;
        if(content.style.height){
            content.style.height = null
        }else{
            content.style.height = content.scrollHeight + "px";
            content.style.paddingRight = 10 + "px";
            content.style.paddingLeft = 10 + "px";
        }
    })
})