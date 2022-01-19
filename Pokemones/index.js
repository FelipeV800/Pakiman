var imagenes = [];
imagenes["Chikorita"] = "Chikorita.png";
imagenes["Cyndaquil"] = "Cyndaquil.png";
imagenes["Totodile"] = "Totodile.png";

var Iniciales = [];
Iniciales.push(new Pokemon("Chikorita", "Planta", 45, 49, 65, 45, 49, 65));
Iniciales.push(new Pokemon("Cyndaquil", "Fuego", 39, 52, 43, 65, 60, 50));
Iniciales.push(new Pokemon("Totodile", "Agua", 50, 65, 64, 43, 44, 48));

for (var p of Iniciales) {
    p.mostrar();
}

var chikoritaImg = document.getElementById("imgChikorita");
var cyndaquilImg = document.getElementById("imgCyndaquil");
var totodileImg = document.getElementById("imgTotodile");

chikoritaImg.addEventListener("click", eleccionChikorita);
cyndaquilImg.addEventListener("click", eleccionCyndaquil);
totodileImg.addEventListener("click", eleccionTotodile);

function eleccionChikorita() {
    if (window.confirm("Estas seguro que quieres elegir a Chikorita")) {
        window.location.href = "chikorita.html";
    }
}

function eleccionCyndaquil() {
    if (window.confirm("Estas seguro que quieres elegir a Cyndaquil")) {
        window.location.href = "cyndaquil.html";
    }
}

function eleccionTotodile() {
    if (window.confirm("Estas seguro que quieres elegir a Totodile")) {
        window.location.href = "totodile.html";
    }
}