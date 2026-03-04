function saveSettings(){

let settings = {
theme: document.getElementById("theme").value,
detail: document.getElementById("detail").value,
speed: document.getElementById("speed").value,
labels: document.getElementById("labels").checked
};

localStorage.setItem("settings", JSON.stringify(settings));

alert("Настройки сохранены");

}

window.onload = function(){

let data = localStorage.getItem("settings");

if(data){

let s = JSON.parse(data);

document.getElementById("theme").value = s.theme;
document.getElementById("detail").value = s.detail;
document.getElementById("speed").value = s.speed;
document.getElementById("labels").checked = s.labels;

}

}