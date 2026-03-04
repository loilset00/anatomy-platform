// ===== загрузка настроек пользователя =====

function loadSettings() {

let saved = localStorage.getItem("appSettings");

if(!saved) return;

let settings = JSON.parse(saved);

// применение темы
if(settings.theme === "dark"){
document.body.style.background = "#1f1f1f";
document.body.style.color = "white";
}

// можно использовать позже
window.userSettings = settings;

}

// ===== сохранение действия пользователя =====

function saveAction(){

let model = document.getElementById("model").value;
let comment = document.getElementById("comment").value;

if(comment.length < 3){
alert("Комментарий должен содержать минимум 3 символа");
return;
}

let actions = JSON.parse(localStorage.getItem("actions")) || [];

actions.push({
model: model,
comment: comment,
date: new Date().toLocaleString()
});

localStorage.setItem("actions", JSON.stringify(actions));

document.getElementById("msg").innerText = "Действие сохранено";

document.getElementById("comment").value = "";

}

// ===== проверка гостевого режима =====

function checkGuest(){

let role = localStorage.getItem("role");

if(role === "guest"){

let btn = document.getElementById("save");

if(btn){
btn.disabled = true;
}

let msg = document.getElementById("msg");

if(msg){
msg.innerText = "Гостевой режим: сохранение отключено";
}

}

}

// ===== загрузка страницы =====

window.onload = function(){

loadSettings();
checkGuest();

};

// ===== кнопка сохранения =====

let saveBtn = document.getElementById("save");

if(saveBtn){
saveBtn.addEventListener("click", saveAction);
}