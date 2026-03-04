function saveSettings(){

let settings = {
theme: document.getElementById("theme").value
};

localStorage.setItem("settings", JSON.stringify(settings));

let lang = document.getElementById("language").value;

localStorage.setItem("lang", lang);

alert("Settings saved");

}