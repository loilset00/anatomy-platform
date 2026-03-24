import { auth, db } from "./firebase.js";

import {
collection,
getDocs,
deleteDoc,
doc,
getDoc,
updateDoc
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// 🔒 ЗАЩИТА
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

countModels.innerText = models.size;
countUsers.innerText = users.size;

}


// 📦 МОДЕЛИ
async function loadModels(){

models.innerHTML="";

const snapshot = await getDocs(collection(db,"models"));

snapshot.forEach(item=>{

let d = item.data();

models.innerHTML += `
<tr>
<td>${d.name}</td>
<td>${d.description}</td>
<td>${d.keywords}</td>
<td>
<button onclick="deleteModel('${item.id}')">🗑</button>
</td>
</tr>
`;

});

}

window.deleteModel = async function(id){

await deleteDoc(doc(db,"models",id));

loadModels();
loadStats();

}


// 👥 ПОЛЬЗОВАТЕЛИ
window.deleteUser = async function(id){

await deleteDoc(doc(db,"users",id));

loadUsers();
loadStats();

}

async function loadUsers(){

users.innerHTML="";

const snapshot = await getDocs(collection(db,"users"));

snapshot.forEach(u=>{

users.innerHTML += `
<tr>
<td>${u.data().email || "-"}</td>
<td>${u.data().role}</td>
<td>
<button onclick="deleteUser('${u.id}')">🗑</button>
</td>
</tr>
`;

});

}


// 💬 КОММЕНТАРИИ
window.deleteComment = async function(id){

await deleteDoc(doc(db,"comments",id));

loadCommentsAdmin();

}

window.editComment = async function(id){

let text = prompt("Новый текст");

if(!text) return;

await updateDoc(doc(db,"comments",id),{
text:text
});

loadCommentsAdmin();

}

async function loadCommentsAdmin(){

commentsAdmin.innerHTML="";

const snapshot = await getDocs(collection(db,"comments"));

snapshot.forEach(c=>{

let d = c.data();

commentsAdmin.innerHTML += `
<tr>
<td>${d.user || "Гость"}</td>
<td>${d.model || "-"}</td>
<td>${d.text}</td>
<td>
<button onclick="editComment('${c.id}')">✏️</button>
<button onclick="deleteComment('${c.id}')">🗑</button>
</td>
</tr>
`;

});

}


// 🚀 ЗАПУСК
loadStats();
loadModels();
loadUsers();
loadCommentsAdmin();