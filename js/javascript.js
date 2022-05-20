const toggle = document.querySelector('.toggle');
const password = document.querySelector('#password');

function change(){

    if(password.type === 'password'){

        password.setAttribute('type', 'text');
        toggle.classList.add('active');
    }
    else{
        password.setAttribute('type', 'password');
        toggle.classList.remove('active');
    }
}