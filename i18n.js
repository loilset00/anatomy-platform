let translations = {};

async function loadLanguage(lang){

let response = await fetch(`lang/${lang}.json`);
translations = await response.json();

document.querySelectorAll("[data-i18n]").forEach(el=>{

let key = el.dataset.i18n;

if(translations[key]){
el.innerText = translations[key];
}

});

}

// загрузка языка при открытии страницы
window.addEventListener("DOMContentLoaded", () => {

let savedLang = localStorage.getItem("lang") || "ru";

loadLanguage(savedLang);

});