// сохранение настроек
document.getElementById("saveBtn").addEventListener("click", () => {

const settings = {
theme: document.getElementById("theme").value,
detail: document.getElementById("detail").value,
speed: document.getElementById("speed").value,
labels: document.getElementById("labels").checked
};

localStorage.setItem("appSettings", JSON.stringify(settings));

alert("Настройки сохранены");

});

// загрузка настроек на странице настроек
window.addEventListener("DOMContentLoaded", () => {

const saved = localStorage.getItem("appSettings");

if(!saved) return;

const settings = JSON.parse(saved);

document.getElementById("theme").value = settings.theme;
document.getElementById("detail").value = settings.detail;
document.getElementById("speed").value = settings.speed;
document.getElementById("labels").checked = settings.labels;

});