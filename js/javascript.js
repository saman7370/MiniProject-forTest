const slides = document.querySelector('.slides').children;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const totalSlider = slides.length;
let duration = 6000;
let index = 0;


next.onclick = ()=>{
    slide('next');
}

prev.onclick = ()=>{
    slide('prev');
}

function slide(direction){
    progress()
    if(direction == 'next'){
        if(index == totalSlider - 1){
            index = 0;
        }else{
            index++;
        }
    }
    if(direction == 'prev'){
        if(index == 0){
            index = totalSlider - 1;
        }else{
            index--;
        }
    }

    clearInterval(timer);
    timer = setInterval(autoSlider, duration);


    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
    }

    slides[index].classList.add('active');
}



function progress(){
    document.querySelector('.progress').innerHTML = '';
    const div = document.createElement('div');
    div.style.width = '0';
    div.style.height = '5';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.backgroundColor = 'red';
    div.style.animation= 'progress ' + duration/1000 + "s linear";
    document.querySelector('.progress').appendChild(div);
}


function autoSlider(){
    slide('next');
}

let timer = setInterval(autoSlider,duration);

progress();

