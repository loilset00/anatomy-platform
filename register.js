import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("register").addEventListener("click", async ()=>{

let email=document.getElementById("email").value;
let pass=document.getElementById("password").value;

// защита от дурака
if(!email.includes("@")){
alert("Введите корректный email");
return;
}
if(pass.length<6){
alert("Пароль минимум 6 символов");
return;
}

const user = await createUserWithEmailAndPassword(auth,email,pass);

// сохраняем роль
await setDoc(doc(db,"users",user.user.uid),{
role:"user",
created:Date.now()
});

alert("Регистрация успешна");
});
