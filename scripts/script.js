const burgerNav = document.getElementById('burger-nav')
const closeNav = document.getElementById('close-nav')
const navMenu = document.getElementById('nav-menu')

burgerNav.addEventListener('click', function(){
    burgerNav.style.display = "none";
    closeNav.style.display = 'block';
    navMenu.style.display = 'block';
})

closeNav.addEventListener('click', function(){
    burgerNav.style.display = "block";
    closeNav.style.display = 'none';
    navMenu.style.display = 'none';
})