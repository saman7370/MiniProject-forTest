const counters = document.querySelectorAll('.counter');
console.log(counters)


counters.forEach(counter =>{
    counter.innerText = "0";

    const updateConter = function(){
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;

        if(c<target){
            counter.innerText = Math.ceil(c + increment);
            setTimeout(updateConter,1)
        }else{
            counter.innerText = target
        }
    }
    updateConter()
})