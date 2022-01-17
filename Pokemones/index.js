var imagenes = [];
imagenes["Chikorita"] = "Chikorita.png";
imagenes["Cyndaquil"] = "Cyndaquil.png";
imagenes["Totodile"] = "Totodile.png";

var Iniciales = [];
Iniciales.push(new Pokemon("Chikorita",  "Planta", 45, 49, 65, 45, 49, 65));
Iniciales.push(new Pokemon("Cyndaquil",  "Fuego", 39, 52, 43, 65, 60, 50));
Iniciales.push(new Pokemon("Totodile",  "Agua", 50, 65, 64, 43, 44, 48));

for (var p of Iniciales){
    p.mostrar();
}

