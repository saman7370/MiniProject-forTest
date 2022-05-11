const country = document.getElementById('country');

country.onchange = function(){
    document.getElementById('select-country').innerHTML = country.value + " :";}