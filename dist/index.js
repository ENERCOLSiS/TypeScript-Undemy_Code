"use strict";
let mensaje = "Hola Mundo";
mensaje = "Chacho gordo";
mensaje = "chao mundo";
console.log(mensaje);
console.log(typeof []);
let extincionDinosarios = 76000000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
let mivariable;
function ChachoFeliz(config) {
    return config;
}
let animales = ["chancho", "feliz", "orlando"];
let nums = [1, 2, 3];
let checks = [];
let num2 = [];
let tupla = [1, ["Ugly chancho", "Handsome Orlando"]];
tupla.push(14);
console.log(tupla);
const peque = "s";
const medium = "m";
const large = "l";
const extraLarge = "xl";
var Talla;
(function (Talla) {
    Talla["Peque"] = "s";
    Talla["Medium"] = "m";
    Talla["Large"] = "l";
    Talla["XLarge"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Large;
console.log(variable1);
const estado = 2;
const objeto = { id: 1,
    nombre: 'Hola Perros',
    talla: Talla.Medium,
    direccion: {
        numero: 1,
        calle: "por allá",
        pais: "neiva"
    }
};
const arr = [];
const fn1 = () => {
    let x = 2;
    if (x > 5) {
        return 7;
    }
    else {
        return 10;
    }
};
const fn2 = (edad) => {
    if (edad > 17) {
        return 'puedes ingresar';
    }
    return 'no puedes pasar';
};
function validaEdad1(edad) {
    if (edad > 17) {
        return 'puedes ingresar';
    }
    return 'no puedes pasar';
}
validaEdad1(18);
function validaEdad2(edad, msg) {
    if (edad > 17) {
        return `puedes ingresar ${msg}`;
    }
    return 'no puedes pasar';
}
validaEdad2(18, 'mono cuco');
function ErrorUsuario() {
    throw new Error('error de ususario');
}
let puntaje = 98;
puntaje = 'hola wuey';
let animal = { id: 1, estado: '', name: '' };
function sumaDos(n) {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos('2');
sumaDos(8);
//# sourceMappingURL=index.js.map