import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
doc,
setDoc
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.register = async function(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

try{

const userCredential = await createUserWithEmailAndPassword(auth,email,password);

const user = userCredential.user;

await setDoc(doc(db,"users",user.uid),{

email:email,
role:"user"

});

alert("Регистрация успешна");

window.location="app.html";

}catch(e){

alert(e.message);

}

}