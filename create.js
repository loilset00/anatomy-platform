import { db } from "./firebase.js";

import {
collection,
addDoc
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.createModel = async function(){

let name = document.getElementById("name").value;
let description = document.getElementById("description").value;
let keywords = document.getElementById("keywords").value;

if(!name || !description || !keywords){
alert("Заполните все поля");
return;
}

await addDoc(collection(db,"models"),{

name,
description,
keywords,
date:new Date()

});

alert("Добавлено");

window.location="admin.html";

};