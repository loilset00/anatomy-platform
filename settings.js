document.getElementById("saveBtn").addEventListener("click", function(){

let settings = {
theme: document.getElementById("theme").value,
detail: document.getElementById("detail").value,
speed: document.getElementById("speed").value,
labels: document.getElementById("labels").checked
};

localStorage.setItem("appSettings", JSON.stringify(settings));

alert("Настройки сохранены");

});

window.onload = function(){

let saved = localStorage.getItem("appSettings");

if(saved){

let settings = JSON.parse(saved);

document.getElementById("theme").value = settings.theme;
document.getElementById("detail").value = settings.detail;
document.getElementById("speed").value = settings.speed;
document.getElementById("labels").checked = settings.labels;

}

};