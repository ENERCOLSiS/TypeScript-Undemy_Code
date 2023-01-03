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
console.log("Suma de 2 + 2 = ", sumaDos('2'));
console.log("Suma de 2 + 8 = ", sumaDos(8));
console.log("la suma de un string y un numeric en JS: ", '2' + 2);
const product = {
    created_at: '',
    modified_at: '',
    name: '',
};
const nDeFibo1 = 5;
const nDeFibo2 = 5;
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(null);
const m = toNumber(undefined);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        name: 'orlando',
        created_at: new Date()
    };
}
const user = getUser(1);
console.log('usuario', user === null || user === void 0 ? void 0 : user.created_at);
if (user && user.created_at) {
    console.log(user.created_at);
}
const arr1 = null;
arr1 === null || arr1 === void 0 ? void 0 : arr1[0];
console.log(arr1 === null || arr1 === void 0 ? void 0 : arr1[0]);
const fn5 = null;
fn5 === null || fn5 === void 0 ? void 0 : fn5();
console.log(fn5 === null || fn5 === void 0 ? void 0 : fn5());
function cb(fn) {
    if (fn) {
        fn();
    }
}
const difficulty = 0;
const user2 = {
    username: "soy yo",
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 1,
};
console.log(user2);
const elem = null;
const elem1 = elem;
const input = document.getElementById('username');
const input1 = document.getElementById('username');
//# sourceMappingURL=index.js.map