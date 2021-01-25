const hamburger = document.querySelector('#menubtn');
const noscroll = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade')

hamburger.addEventListener('click', function(){//close menu hamburger
    if(header.classList.contains('open')){
        noscroll.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElements.forEach((element) => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    }else{//opne menu hamburger
        noscroll.classList.add('noscroll');
        header.classList.add('open');
        fadeElements.forEach((element) => {
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });
    }
});