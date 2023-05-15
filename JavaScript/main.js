console.log("connecté!!!!");
const btnToggle = document.querySelector('.toggleBtn');
const icon = document.querySelector('.toggleBtn i ');
const menuDrop = document.querySelector('.dropdownMenu');

btnToggle.addEventListener('click',function(){
    menuDrop.classList.toggle('open');

    let isOpen = menuDrop.classList.contains('open');

    icon.className = isOpen ? 'fa-solid fa-xmark':'fa-solid fa-bars';
})