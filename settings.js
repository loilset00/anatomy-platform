function saveSettings(){

let settings = {
theme: document.getElementById("theme").value,
language: document.getElementById("language").value
};

localStorage.setItem("settings", JSON.stringify(settings));

// сохраняем язык отдельно
localStorage.setItem("lang", settings.language);

alert("Settings saved");

}