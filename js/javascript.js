const slide = document.querySelector('.slider').children;
const img = document.querySelector('.profile').children;

for(i = 0; i < img.length; i++){
    img[i].addEventListener('click',function(){

        for(j = 0; j< img.length; j++){
            img[j].classList.remove('active');
        }

        this.classList.add('active');

        const id = this.getAttribute('data-id');

        for(z = 0; z < slide.length; z++){
            slide[z].classList.remove('active');
        }

        slide[id].classList.add('active');





    })
}