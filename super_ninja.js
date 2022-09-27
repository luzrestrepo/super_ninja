// ejemplo de salida
//const superSensei = new Sensei("Master Splinter");
//superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
//superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"



const Ninja = require("./ninja");

class Sensei extends Ninja {
    constructor(nombre, salud, velocidad, fuerza, sabiduria) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = 10;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }


}

const supersensei = new Sensei("Luz splinter");
supersensei.speakWisdom();
supersensei.drinkSake();