"use strict";
class Personaje1 {
    constructor(id, name, nivel, hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    campiarHP(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
}
const personaje1 = new Personaje1(1, 'Mig', 1, 100);
personaje1.campiarHP(-10);
console.log(personaje1);
if (typeof personaje1) {
}
if (personaje1 instanceof Personaje1) {
}
class Personaje2 {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    campiarHP(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
}
const personaje2 = new Personaje2(2, 'Mozz', 2, 100);
personaje2.campiarHP(+15);
console.log(personaje2);
class Personaje3 {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    campiarHP(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    set hp(cantidad) {
        this._hp = this._hp + cantidad;
    }
}
const personaje3 = new Personaje3(3, 'Mar', 12, 100);
personaje3.hp = 20;
console.log(personaje3);
class Personaje {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    campiarHP(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    set hp(cantidad) {
        this._hp = this._hp + cantidad;
    }
    static agregarPersonaje() {
        Personaje.equipo++;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
}
Personaje.equipo = 1;
const personaje4 = new Personaje(4, 'Paula', 10, 100);
personaje4.campiarHP(-5);
const personaje5 = new Personaje(5, 'papa', 12, 120);
Personaje.agregarPersonaje();
console.log(personaje4, '\n', personaje5);
console.log(Personaje.getEquipo());
//# sourceMappingURL=clases.js.map