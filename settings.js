// ===== словарь переводов =====

const translations = {

ru:{
title:"⚙ Настройки приложения",
theme:"Тема интерфейса",
language:"Язык интерфейса"
},

en:{
title:"⚙ Application settings",
theme:"Interface theme",
language:"Language"
}

};


// ===== загрузка настроек =====

window.onload=function(){

let settings=JSON.parse(localStorage.getItem("settings")) || {};

if(settings.theme){
document.getElementById("theme").value=settings.theme;
}

if(settings.language){
document.getElementById("language").value=settings.language;
applyLanguage(settings.language);
}

};


// ===== сохранить настройки =====

document.getElementById("saveBtn").onclick=function(){

let settings={

theme:document.getElementById("theme").value,
language:document.getElementById("language").value,
detail:document.getElementById("detail").value,
speed:document.getElementById("speed").value,
labels:document.getElementById("labels").checked

};

localStorage.setItem("settings",JSON.stringify(settings));

applyLanguage(settings.language);

alert("Настройки сохранены");

};


// ===== сброс настроек =====

document.getElementById("resetBtn").onclick=function(){

localStorage.removeItem("settings");

location.reload();

};


// ===== перевод интерфейса =====

function applyLanguage(lang){

document.getElementById("title").innerText=translations[lang].title;
document.getElementById("themeLabel").innerText=translations[lang].theme;
document.getElementById("languageLabel").innerText=translations[lang].language;

}


// ===== кнопка назад =====

function goBack(){

history.back();

}