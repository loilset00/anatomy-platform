window.onload=function(){

let settings=JSON.parse(localStorage.getItem("settings"));

if(settings){

if(settings.theme==="dark"){
document.body.classList.add("dark-theme");
}


// если светлая
else{
document.body.classList.remove("dark-theme");
}

};