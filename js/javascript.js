const button = document.querySelectorAll('a');

button.forEach(btn =>{
    btn.addEventListener('click',function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let span = document.createElement('span');
        this.appendChild(span);

        span.style.left = x + "px";
        span.style.top = y + "px";

        setTimeout(() =>{

            span.remove()

        },1000);
    })
})