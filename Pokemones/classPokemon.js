class Pokemon {
    constructor (nombre, tipo, ps, atq, def, vel, atqEsp, defEsp) {
        this.imagen = new Image();
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = ps;
        this.ataque = atq;
        this.defensa = def;
        this.velocidad = vel;
        this.ataqueEspecial = atqEsp;
        this.defensaEspecial = defEsp;
        this.imagen.src = imagenes[this.nombre];
    }

    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<br/> <strong>" + this.nombre + "</strong> <br/>");
        document.write("Tipo: " + this.tipo + "<hr/>");
        document.write("Puntos de salud: " + this.vida + "<hr/>");
        document.write("Ataque: " + this.ataque + "<hr/>");
        document.write("Defensa: " + this.defensa + "<hr/>");
        document.write("Velocidad: " + this.velocidad + "<hr/>");
        document.write("Ataque especial: " + this.ataqueEspecial + "<hr/>");
        document.write("Defensa especial: " + this.defensaEspecial + "<hr/>");
    }
}