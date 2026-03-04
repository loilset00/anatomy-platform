window.onload=function(){

let theme=localStorage.getItem("theme");

// если темная
if(theme==="dark"){
document.body.classList.add("dark-theme");
}

// если светлая
else{
document.body.classList.remove("dark-theme");
}

};