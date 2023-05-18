/* Импортируем webpack */
 import * as flsFunctions from "./modules/function.js";

 flsFunctions.isWebp();
 
 //изменение цвета иконки "сердца" при клике на неё
const buttons = [... document.querySelectorAll('.ecommerce-girl-like')];
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('ecommerce-girl-like-active')
    });
});

//появление формы поиска при клике на иконку "поиск"
const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener('click', () => {
  const inputSearch = document.getElementById('input-search');
  inputSearch.classList.toggle('input-search-active');
});