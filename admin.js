import { auth, db } from "./firebase.js";

import {
collection,
getDocs,
deleteDoc,
doc,
getDoc
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// 🔒 ЗАЩИТА АДМИНКИ
onAuthStateChanged(auth, async (user)=>{

if(!user){
window.location="index.html";
return;
}

const snap = await getDoc(doc(db,"users",user.uid));

if(!snap.exists() || snap.data().role !== "admin"){
alert("Нет доступа");
window.location="app.html";
}

});


// 📊 СТАТИСТИКА
async function loadStats(){

const models = await getDocs(collection(db,"models"));
const users = await getDocs(collection(db,"users"));

document.getElementById("countModels").innerText = models.size;
document.getElementById("countUsers").innerText = users.size;

}


// 📦 МОДЕЛИ
async function loadModels(){

const table = document.getElementById("models");

table.innerHTML="";

const snapshot = await getDocs(collection(db,"models"));

snapshot.forEach(item=>{

let data = item.data();

table.innerHTML += `
<tr>
<td>${data.name}</td>
<td>${data.description}</td>
<td>${data.keywords}</td>
<td>
<button onclick="editModel('${item.id}')" class="btn btn-warning btn-sm">✏️</button>
<button onclick="deleteModel('${item.id}')" class="btn btn-danger btn-sm">🗑</button>
</td>
</tr>
`;

});

}


// 🗑 УДАЛЕНИЕ
window.deleteModel = async function(id){

if(confirm("Удалить модель?")){

await deleteDoc(doc(db,"models",id));

loadModels();
loadStats();

}

}


// ✏️ РЕДАКТИРОВАНИЕ
window.editModel = function(id){

window.location = "edit.html?id=" + id;

}


// 👥 ПОЛЬЗОВАТЕЛИ
async function loadUsers(){

const table = document.getElementById("users");

const snapshot = await getDocs(collection(db,"users"));

table.innerHTML="";

snapshot.forEach(u=>{

table.innerHTML += `
<tr>
<td>${u.data().email || "—"}</td>
<td>${u.data().role}</td>
</tr>
`;

});

}


// 🚀 ЗАПУСК
loadModels();
loadUsers();
loadStats();