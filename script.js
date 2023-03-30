const menu_button = document.querySelector('#hamburger_menu');
const mobile_menu_button = document.querySelector('.mobile_window');

menu_button.addEventListener('click', function (){
    menu_button.classList.toggle('active');
    mobile_menu_button.classList.toggle('active');
})

const close_menu = document.querySelector('.mobile_window')

close_menu.addEventListener('click', function (){
    close_menu.classList.toggle('active');
})