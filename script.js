let login = document.querySelector('.login-btn');
let signup = document.querySelector('.signup-btn');
let slider = document.querySelector('.slider');
let formSlide = document.querySelector('.form');

const loginBTN = () =>{
    slider.classList.remove('move-slider');
    formSlide.classList.remove('move-form');
}

const signupBTN = () =>{
    slider.classList.add('move-slider');
    formSlide.classList.add('move-form');
}
