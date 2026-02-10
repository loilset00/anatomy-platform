import { db } from "./firebase.js";
import { collection, getDocs } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const usersTable=document.querySelector("#users tbody");
const actionsTable=document.querySelector("#actions tbody");

// --- пользователи ---
const users=await getDocs(collection(db,"users"));

users.forEach(u=>{
usersTable.innerHTML+=`<tr>
<td>${u.id}</td>
<td>${u.data().role}</td>
</tr>`;
});

// --- действия ---
const actions=await getDocs(collection(db,"actions"));

actions.forEach(a=>{
let d=new Date(a.data().date).toLocaleString();

actionsTable.innerHTML+=`<tr>
<td>${a.data().user}</td>
<td>${a.data().model}</td>
<td>${a.data().comment}</td>
<td>${d}</td>
</tr>`;
});
