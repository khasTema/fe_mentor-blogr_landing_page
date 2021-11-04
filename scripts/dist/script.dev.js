"use strict";

var burgerNav = document.getElementById('burger-nav');
var closeNav = document.getElementById('close-nav');
var navMenu = document.getElementById('nav-menu');
burgerNav.addEventListener('click', function () {
  burgerNav.style.display = "none";
  closeNav.style.display = 'block';
  navMenu.style.display = 'block';
});
closeNav.addEventListener('click', function () {
  burgerNav.style.display = "block";
  closeNav.style.display = 'none';
  navMenu.style.display = 'none';
});