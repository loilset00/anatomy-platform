import { auth, db } from "./firebase.js";
import { addDoc, collection } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("save").onclick=async()=>{

await addDoc(collection(db,"actions"),{
user:auth.currentUser.email,
model:document.getElementById("model").value,
comment:document.getElementById("comment").value,
date:Date.now()
});


document.getElementById("msg").innerText="Сохранено";
};

let settings = JSON.parse(localStorage.getItem("appSettings"));

if(settings){

if(settings.theme === "dark"){
document.body.style.background = "#222";
document.body.style.color = "white";
}

}