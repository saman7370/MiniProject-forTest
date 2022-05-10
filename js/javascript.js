const intro = document.querySelector('.intro');
const logo = document.querySelectorAll('.logo');

window.addEventListener('load', function(){

    this.setTimeout(()=>{
        logo.forEach((Logo,inx)=>{
            setTimeout(()=>{
                Logo.classList.add('active')
            },(inx+1)*400)
        })
    })

    this.setTimeout(()=>{
        logo.forEach((Logo,inx) =>{
            this.setTimeout(()=>{
                Logo.classList.remove('active');
                Logo.classList.add('fade');

            },(inx+1)*50)
        })

    },2000)

     this.setTimeout(()=>{
          intro.style.top = '-100vh'

     },2300)
})