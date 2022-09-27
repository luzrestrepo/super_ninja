class Ninja {
    constructor(nombre, salud, velocidad, fuerza) {

        this.nombre = nombre;
        this.salud = 2;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(this.nombre)
    }

    showStats() {
        console.log(`Nombre: ${this.nombre} Fuerza: ${this.fuerza} Velocidad: ${this.velocidad} Salud: ${this.salud} Sabiduria: ${this.sabiduria}`)
    }

    drinkSake() {
        this.salud += 10;
    }

    speakWisdom() {
        console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.')
        this.showStats()
    }


}
const ninja1 = new Ninja("DirkJhon");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1.salud)






module.exports = Ninja;