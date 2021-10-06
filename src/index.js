import './sass/main.scss';
import items from "./menu.json";
import colorCardsHbs from "./templates/color-cards.hbs";

const listItem = makeGalleryItem(items);
const ulEl = document.querySelector('.js-menu');
ulEl.insertAdjacentHTML('beforeend', listItem);

const inputEl = document.querySelector('.theme-switch__toggle');
inputEl.addEventListener('change', onInputChange);
function onInputChange(e) {

    if (e.target.checked) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
    }
    else  {
        document.body.classList.remove(Theme.DARK);
        document.body.classList.add(Theme.LIGHT);
        
    }
 
    const dataStorage = document.body.classList;
   
    localStorage.setItem('theme', dataStorage);
}

function makeGalleryItem(item) {
    return item.map(colorCardsHbs).join('');
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};