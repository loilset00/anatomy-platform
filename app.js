import { db } from "./firebase.js";

import {
collection,
addDoc,
getDocs,
query,
orderBy
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const commentsRef = collection(db,"comments");


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

// загрузка комментариев
loadComments();

};



// ===== СОХРАНЕНИЕ КОММЕНТАРИЯ =====

import { auth } from "./firebase.js";

window.saveComment = async function(){

let text = document.getElementById("comment").value;
let model = document.getElementById("model").value;

let user = auth.currentUser?.email || "Гость";

if(text.trim()===""){
alert("Введите комментарий");
return;
}

await addDoc(collection(db,"comments"),{
text:text,
user:user,
model:model,
date:new Date()
});

await addDoc(collection(db,"actions"),{
user:user,
model:model,
comment:text,
date:new Date()
});

document.getElementById("comment").value="";

loadComments();

};
// ===== ЗАГРУЗКА КОММЕНТАРИЕВ =====

async function loadComments(){

const q = query(commentsRef,orderBy("date","desc"));

const snapshot = await getDocs(q);

const list = document.getElementById("comments");

if(!list) return;

list.innerHTML="";

snapshot.forEach(doc=>{

let li = document.createElement("li");

li.className="list-group-item";

li.innerText = doc.data().text;

list.appendChild(li);

});

}