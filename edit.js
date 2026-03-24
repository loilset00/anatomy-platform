import { db } from "./firebase.js";

import {
doc,
getDoc,
updateDoc
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const name = document.getElementById("name");
const description = document.getElementById("description");
const keywords = document.getElementById("keywords");

async function loadData(){

const snapshot = await getDoc(doc(db,"models",id));

let data = snapshot.data();

name.value = data.name;
description.value = data.description;
keywords.value = data.keywords;

}

window.updateModel = async function(){

await updateDoc(doc(db,"models",id),{

name:name.value,
description:description.value,
keywords:keywords.value

});

alert("Обновлено");

window.location="admin.html";

};

loadData();