const hamburger = document.querySelector('#menubtn');
const header = document.querySelector('.header');

hamburger.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open')
    }else{
        header.classList.add('open');
    }
});