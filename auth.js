import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc, getDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const email=document.getElementById("email");
const pass=document.getElementById("password");
const msg=document.getElementById("msg");

document.getElementById("register").onclick=async()=>{

if(!email.value.includes("@")) return msg.innerText="Неверный email";
if(pass.value.length<6) return msg.innerText="Пароль минимум 6 символов";

const user=await createUserWithEmailAndPassword(auth,email.value,pass.value);

// первый пользователь = админ
const role=(await getDoc(doc(db,"meta","init"))).exists()? "user":"admin";
await setDoc(doc(db,"meta","init"),{created:true});

await setDoc(doc(db,"users",user.user.uid),{role});

msg.innerText="Регистрация успешна";
};

document.getElementById("login").onclick=async()=>{
const user=await signInWithEmailAndPassword(auth,email.value,pass.value);
const data=await getDoc(doc(db,"users",user.user.uid));
location.href=data.data().role==="admin"?"admin.html":"app.html";
};
