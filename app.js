// ===== применение настроек =====

function applySettings(){

const saved = localStorage.getItem("appSettings");

if(!saved) return;

const settings = JSON.parse(saved);

// темная тема
if(settings.theme === "dark"){
document.body.classList.add("dark-theme");

document.querySelectorAll(".card").forEach(card=>{
card.classList.add("dark-theme");
});
}

}

// ===== сохранение действия =====

function saveAction(){

const model = document.getElementById("model").value;
const comment = document.getElementById("comment").value;

if(comment.length < 3){
alert("Комментарий должен содержать минимум 3 символа");
return;
}

let actions = JSON.parse(localStorage.getItem("actions")) || [];

actions.push({
model:model,
comment:comment,
date:new Date().toLocaleString()
});

localStorage.setItem("actions", JSON.stringify(actions));

document.getElementById("msg").innerText="Действие сохранено";

document.getElementById("comment").value="";

loadHistory();

}

// ===== история действий =====

function loadHistory(){

const history = document.getElementById("history");

if(!history) return;

history.innerHTML="";

let actions = JSON.parse(localStorage.getItem("actions")) || [];

actions.forEach(a=>{

let li=document.createElement("li");
li.className="list-group-item";

li.innerText=`${a.date} — ${a.model}: ${a.comment}`;

history.appendChild(li);

});

}

// ===== запуск страницы =====

window.addEventListener("DOMContentLoaded", ()=>{

applySettings();
loadHistory();

const btn=document.getElementById("save");

if(btn){
btn.addEventListener("click",saveAction);
}

});