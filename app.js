window.onload = function(){

// загрузка темы
let settings = JSON.parse(localStorage.getItem("settings")) || {};

if(settings.theme === "dark"){
document.body.classList.add("dark-theme");
}else{
document.body.classList.remove("dark-theme");
}

// загрузка языка
let lang = localStorage.getItem("lang") || "ru";

if(typeof loadLanguage === "function"){
loadLanguage(lang);
}

};